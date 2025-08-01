<template>
  <div id="app" :data-theme="theme">
    <div class="container">
      <!-- Header -->
      <header class="header">
        <div>
          <h1 class="title">{{ currentContent.title }}</h1>
          <p class="subtitle">{{ currentContent.subtitle }}</p>
        </div>
        
        <div class="controls">
          <!-- Language Dropdown -->
          <div class="language-dropdown">
            <button class="btn" @click="toggleLanguageDropdown" aria-label="Select language">
              <font-awesome-icon :icon="['fas', 'globe']" />
            </button>
            
            <div v-if="showLanguageDropdown" class="dropdown-menu">
              <button
                v-for="lang in availableLanguages"
                :key="lang.code"
                class="dropdown-item"
                :class="{ active: currentLanguage === lang.code }"
                @click="changeLanguage(lang.code)"
              >
                {{ lang.name }}
              </button>
            </div>
          </div>
          
          <!-- Theme Toggle -->
          <button class="btn theme-toggle" @click="toggleTheme" aria-label="Toggle theme">
            <font-awesome-icon :icon="['fas', theme === 'dark' ? 'sun' : 'moon']" />
          </button>
        </div>
      </header>
      
      <!-- Content -->
      <main class="content">
        <div class="manifesto-text" v-html="renderedContent"></div>
      </main>
      
      <!-- Share Section -->
      <section class="share-section">
        <h2 class="share-title">{{ currentContent.shareTitle }}</h2>
        <div class="share-buttons">
          <button class="share-btn primary" @click="shareContent">
            <font-awesome-icon :icon="['fas', 'share']" />
            {{ currentContent.shareButton }}
          </button>
          
          <button class="share-btn secondary" @click="copyLink">
            <font-awesome-icon :icon="['fas', 'copy']" />
            {{ currentContent.copyLink }}
          </button>

          <button class="share-btn secondary" @click="openGithub">
            Github
          </button>
        </div>
      </section>
    </div>
    
    <!-- Copy Feedback -->
    <div v-if="showCopyFeedback" class="copy-feedback">
      <font-awesome-icon :icon="['fas', 'check']" />
      {{ currentContent.linkCopied }}
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted, watch } from 'vue'
import { marked } from 'marked'
import contentEn from '../content/en.md'
import contentEs from '../content/es.md'
import contentFr from '../content/fr.md'
import contentDe from '../content/de.md'
import contentIt from '../content/it.md'
import contentNl from '../content/nl.md'
import contentSv from '../content/sv.md'

export default {
  name: 'App',
  setup() {
    const theme = ref('light')
    const currentLanguage = ref('en')
    const showLanguageDropdown = ref(false)
    const showCopyFeedback = ref(false)
    
    const availableLanguages = [
      { code: 'en', name: 'English' },
      { code: 'es', name: 'Español' },
      { code: 'fr', name: 'Français' },
      { code: 'de', name: 'Deutsch' },
      { code: 'it', name: 'Italiano' },
      { code: 'nl', name: 'Nederlands' },
      { code: 'sv', name: 'Svenska' }
    ]
    
    const contentMap = {
      en: contentEn,
      es: contentEs,
      fr: contentFr,
      de: contentDe,
      it: contentIt,
      nl: contentNl,
      sv: contentSv
    }
    
    const currentContent = computed(() => {
      return contentMap[currentLanguage.value] || contentMap.en
    })
    
    const renderedContent = computed(() => {
      return marked(currentContent.value.content)
    })
    
    // Theme management
    const detectSystemTheme = () => {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    
    const setTheme = (newTheme) => {
      theme.value = newTheme
      localStorage.setItem('theme', newTheme)
      document.documentElement.setAttribute('data-theme', newTheme)
      
      // Remove no-flash class to enable transitions for theme changes
      document.documentElement.classList.remove('no-flash')
    }
    
    const toggleTheme = () => {
      const newTheme = theme.value === 'light' ? 'dark' : 'light'
      setTheme(newTheme)
    }
    
    // Language management
    const changeLanguage = (langCode) => {
      currentLanguage.value = langCode
      localStorage.setItem('language', langCode)
      showLanguageDropdown.value = false
    }
    
    const toggleLanguageDropdown = () => {
      showLanguageDropdown.value = !showLanguageDropdown.value
    }
    
    // Share functionality
    const shareContent = async () => {
      const shareData = {
        title: currentContent.value.title,
        text: currentContent.value.shareText,
        url: window.location.href
      }
      
      if (navigator.share) {
        try {
          await navigator.share(shareData)
        } catch (error) {
          console.log('Share cancelled or failed:', error)
        }
      } else {
        // Fallback: copy to clipboard
        copyLink()
      }
    }
    
    const copyLink = async () => {
      try {
        await navigator.clipboard.writeText(window.location.href)
        showCopyFeedback.value = true
        setTimeout(() => {
          showCopyFeedback.value = false
        }, 2000)
      } catch (error) {
        console.error('Failed to copy link:', error)
      }
    }
    
    const openGithub = () => {
      window.open('https://github.com/corsair/better-online-safety-proposal', '_blank', 'noopener,noreferrer')
    }
    
    // Close dropdown when clicking outside
    const handleClickOutside = (event) => {
      if (!event.target.closest('.language-dropdown')) {
        showLanguageDropdown.value = false
      }
    }
    
    // Initialize
    onMounted(() => {
      // Get the theme that was set in the HTML head
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light'
      theme.value = currentTheme
      
      // Load saved language
      const savedLanguage = localStorage.getItem('language')
      if (savedLanguage && contentMap[savedLanguage]) {
        currentLanguage.value = savedLanguage
      }
      
      // Listen for system theme changes
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
          setTheme(e.matches ? 'dark' : 'light')
        }
      })
      
      // Add click outside listener
      document.addEventListener('click', handleClickOutside)
    })
    
    // Cleanup
    watch(() => showLanguageDropdown.value, (newValue) => {
      if (newValue) {
        document.addEventListener('click', handleClickOutside)
      } else {
        document.removeEventListener('click', handleClickOutside)
      }
    })
    
    return {
      theme,
      currentLanguage,
      showLanguageDropdown,
      showCopyFeedback,
      availableLanguages,
      currentContent,
      renderedContent,
      toggleTheme,
      changeLanguage,
      toggleLanguageDropdown,
      shareContent,
      copyLink,
      openGithub
    }
  }
}
</script> 