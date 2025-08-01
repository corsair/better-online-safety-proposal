---
title: "Förslag för Bättre Online-Säkerhet"
subtitle: "För ett säkrare internet för barn, utan att kompromissa med integriteten."
shareTitle: "Dela detta förslag"
shareButton: "Dela"
copyLink: "Kopiera Länk"
linkCopied: "Länk kopierad till urklipp!"
shareText: "Kolla in detta förslag för ett säkrare internet, utan att kompromissa med integriteten."
---

## Förord

**Internet behöver göras säkrare för barn.** Men lagar som [Online Safety Act](#) i Storbritannien, [Digital Services Act](https://commission.europa.eu/strategy-and-policy/priorities-2019-2024/europe-fit-digital-age/digital-services-act_en) ("DSA") för Europeiska unionen, och [Kids Online Safety Act](https://www.congress.gov/bill/119th-congress/senate-bill/1748/text) i USA riskerar att orsaka långvarig skada för både vuxna och online-plattformar.

För närvarande är processen för identitetsverifiering trasig. Detta förslag presenterar en ny, globalt användbar implementering av identitetsverifiering som uppnår de primära målen för dessa lagar, samtidigt som den avsevärt eliminerar risker för identitetsstöld och integritetskränkningar.

## Grundprinciper

### Val
**Det är avgörande att individer har fullständig kontroll över vilken personligt identifierbar information en online-plattform kan komma åt eller begära.**

Innan en identitet verifieras måste personlig information som kommer att delas med online-plattformen *tydligt kommuniceras till individen*, och de bör ha möjlighet att avböja innan de fortsätter med identitetsverifiering.

##### **Oro:** Identitetsverifieringstjänster som samlar in identifikationsdokument eller pass möjliggör åtkomst till all personlig information. Individer kan inte samtycka eller blir tydligt informerade om vilken specifik information som delas med tjänsterna.

### Gränser
**Kvalitet framför kvantitet. Det är av yttersta vikt att online-plattformar som kräver identitetsverifiering begränsar informationsförfrågningar till vad som är absolut nödvändigt.**

I de flesta fall av identitetsverifiering är det bara nödvändigt att avgöra om individen är vuxen. Online-plattformar bör bara begära personligt identifierbar information (t.ex. fullständigt namn, adress) om det är tillämpligt eller krävs för användning.

##### **Oro:** Insamling och lagring av personligt identifierbar information missbrukas ofta och är en viktig säkerhetsoro för många individer. Detta har bidragit till en allmän misstro och avvisning av identitetsverifiering på befintliga online-plattformar. Att minska lagrad information är avgörande för att minska skada från obehörig åtkomst och komprometterade databaser.

### Etik
**Förmågan att verifiera identiteter måste vara rättvis och icke-diskriminerande om den anses obligatorisk enligt lag.**

Processen att verifiera en identitet måste vara logistiskt och ekonomiskt rimlig för både online-plattformen och individer. Regeringar med lagar som kräver identitetsverifiering måste antingen tillhandahålla sina egna verifieringstjänster, eller sponsra tjänster som uppfyller deras krav för att eliminera eller minska kostnader för alla parter.

##### **Oro:** Det nuvarande tillståndet för identitetsverifiering presenterar många utmaningar. Mindre online-plattformar kan inte kunna motivera kostnaden för att verifiera alla individer under risk för konkurs, medan större online-plattformar kan behöva minska sin personalstyrka.

## Förslag

### 1. Öppen Identitetsverifieringsstandard

Regeringar måste arbeta tillsammans för att skapa ett universellt accepterat ramverk för identitetsverifiering som efterliknar "OAuth".

Online-plattformar registrerar sig hos en identitetsverifieringstjänst och får ett Klient-ID och kan tillhandahålla acceptabla Omdirigerings-URI:er.

När en identitetsverifieringsprocess initieras kommer online-plattformen att definiera vilken information de kräver som scope (t.ex. "Ålder", "Fullständigt Namn"), eller de kan välja att helt enkelt avgöra om individen är vuxen.

### 2. Samtyckesbaserad Verifieringsprocess

När individen omdirigeras till verifieringstjänsten måste personlig information som avslöjas för online-plattformen **tydligt kommuniceras och avslöjas** innan identifierbara dokument, biometri eller AI-processer börjar.

Individen måste manuellt acceptera denna informationsavslöjning. Om accepterad kan tjänsten börja sin verifieringsprocess med alla lämpliga metoder.

Om individen vägrar, skicka tillbaka dem till online-plattformen som sedan kommer att hantera "verifieringsmisslyckandet" i enlighet med detta.

### 3. Uppmuntra Credential-baserad Verifiering

Statliga organ som kräver verifiering uppmuntras att tillhandahålla ett valfritt sätt att skapa och registrera ett online-konto som är uteslutande ägt av och associerat med individen (medborgare).

När ett konto har skapats kan individer verifiera sin identitet via en statligt sponsrad identitetstjänst (antingen hanterad av regeringen eller i partnerskap med) permanent eller tillfälligt.

Detta konto kan sedan användas av individen och kontoinnehavaren på registrerade online-plattformar för att snabbt och enkelt få tillgång.

### 4. Upprätthålla Kommunikation

När innehållspolicyer förändras måste regeringar sträva efter tillgänglig och öppen kommunikation med online-plattformar för att uppmuntra efterlevnad.

## Vägen Framåt

Detta förslag representerar en utgångspunkt för meningsfull dialog mellan regeringar, teknikföretag och det civila samhället. Implementering kommer att kräva:

- Internationellt samarbete för att fastställa gemensamma standarder
- Offentligt engagemang och feedback
- Fasade implementeringar med pilotprogram
- Regelbunden granskning och anpassning baserat på verkliga resultat
- Transparent rapportering om effektivitet och integritetsskydd

## Ordlista
* **Individ:** Betyder vilken person som helst (människa) av minst arton (18) års ålder, eller myndig ålder i deras respektive region.
* **Online-plattform, eller "Plattform":** Betyder vilken webbplats, onlinetjänst eller applikation som helst. Användningar kan variera från sociala medier, nätverkande, forum, eller annars gemenskaper (bestående av en eller flera individer).
* **Barn, eller Barn:** Betyder en individ som är under arton (18) års ålder eller myndig ålder i deras respektive region.

## Gå Med i Rörelsen

Detta förslag är öppen källkod och tillgängligt för översättning, anpassning och distribution.* 