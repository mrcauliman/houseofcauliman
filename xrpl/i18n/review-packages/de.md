# XRPL LAYMAN review package: Deutsch

This file is for a native speaker of Deutsch. You do not need the website source code, and you do not need to open the site. The English sentence and the current Deutsch translation are both in this file. The CSV next to this file has the same rows.

Nothing in this package is native-approved. The Approve, Correction, Reviewer, and Date lines are blank on purpose.

## How to review

1. Read one row at a time. The sections follow this order: wallet recovery and seed, signing, destination tags, trust lines, reserves and fees, DEX and AMM, NFTs, then other security and finance copy.
2. A sentence is filed under the first matching section. Seed wins over every later topic. A destination-tag sentence is in the destination-tag section even if it also mentions signing.
3. Decide whether a reader of Deutsch learns the same fact as the English, including every “not”, “never”, and “cannot”. A quiz answer that is false in English must stay false.
4. Do not change `$XRP`, the numbers `1` and `0.2`, account addresses, `NFTokenID`, `NFTokenPage`, `TakerGets`, or `TakerPays`.
5. Terms in the glossary stay in English. A parenthetical gloss such as `(trust line)` or `(seed)` may stay next to the translated term.
6. If the translation is right, write `approve` on the Approve line. If it should change, leave Approve blank and write the full replacement on the Correction line.
7. Write your name and the date yourself. Do not mark a row approved for someone else.

## Glossary of terms kept in English

| Term | Keep it because |
| --- | --- |
| `XRPL` | The XRP Ledger. Keep the letters XRPL. |
| `XRPL LAYMAN` | The name of this lesson site. Keep both words, in that order. |
| `$XRP` | The way this site writes the reserve and fee unit. Keep the dollar sign. |
| `XRP` | The asset. Keep the letters XRP. |
| `Xaman` | A wallet application. Keep the name. |
| `Testnet` | The public test network. Keep the name. |
| `Mainnet` | The public network with real assets. Keep the name. |
| `NFT` | A non-fungible token. The short label often stays NFT. |
| `NFTokenID` | The ledger’s identifier for one NFT. Do not translate the field name. |
| `NFTokenPage` | The ledger page that stores NFTs. Do not translate the field name. |
| `DEX` | The built-in exchange. Keep the letters DEX. |
| `AMM` | An automated market maker. Keep the letters AMM. |
| `TakerGets` | One side of a DEX offer. Do not translate the field name. |
| `TakerPays` | The other side of a DEX offer. Do not translate the field name. |
| `MPT` | A multi-purpose token. It is a different standard from a trust-line token. |
| `URI` | The link field on an NFT. Keep the letters URI. |
| `Seed` | Some short labels are still the English word Seed on purpose. |
| `Trust line` | Some short labels are still the English words Trust line on purpose. |
| `Freeze` | Some short labels are still the English word Freeze on purpose. |
| `Destination Tag` | Some short labels are still the English words Destination Tag on purpose. |
| `Regular key` | An extra signing key. The English name may stay beside the translation. |
| `Master key` | The original signing key. The English name may stay beside the translation. |
| `AUGUR` | A name used in an example. Keep the spelling. |
| `House of Cauliman` | The publisher of this site. Keep the name, in that order. |

## Counts

| Section | Rows | Approved |
| --- | ---: | ---: |
| 1. Wallet recovery and seed | 33 | 0 |
| 2. Signing | 48 | 0 |
| 3. Destination tags | 5 | 0 |
| 4. Trust lines | 41 | 0 |
| 5. Reserves and fees | 39 | 0 |
| 6. DEX and AMM | 9 | 0 |
| 7. NFTs | 16 | 0 |
| 8. Other security and finance | 39 | 0 |
| Total | 230 | 0 |

## 1. Wallet recovery and seed

This sentence is about the secret that can recreate the account.

What the reader must understand for this whole section: A seed or secret is not a resettable password. Anyone who has it can control the account. Changing an app password does not fix a leaked seed.

### 1.1 `a-human-manageable-secret-that-can-d.8636fdfc`

- Risk tier: Wallet recovery and seed
- Page: Definitions (/xrpl/definitions.html)
- Heading on that page: Seed
- Purpose: This sentence is about the secret that can recreate the account.
- What the reader must understand: A seed or secret is not a resettable password. Anyone who has it can control the account. Changing an app password does not fix a leaked seed. The English wording to preserve is: A human-manageable secret that can derive the keys. It’s not a password you can reset.
- English: A human-manageable secret that can derive the keys. It’s not a password you can reset.
- Current translation: Ein von Menschen handhabbares Geheimnis, aus dem sich die Schlüssel ableiten lassen. Es ist kein Passwort, das du zurücksetzen kannst.
- Approve:
- Correction:
- Reviewer:
- Date:

### 1.2 `a-signer-list-assigns-weights-and-a.88fc3ebe`

- Risk tier: Wallet recovery and seed
- Page: Issuer control (/xrpl/builders/issuer-control.html)
- Heading on that page: Use shared authority deliberately
- Purpose: This sentence is about the secret that can recreate the account.
- What the reader must understand: A seed or secret is not a resettable password. Anyone who has it can control the account. Changing an app password does not fix a leaked seed. The English wording to preserve is: A signer list assigns weights and a quorum. For example, three independent signers of weight one with quorum two requires enough valid signatures to reach two. This only protects the intended signing route: review any enabled master or regular key as well. Test recovery on a non-production network before moving authority.
- English: A signer list assigns weights and a quorum. For example, three independent signers of weight one with quorum two requires enough valid signatures to reach two. This only protects the intended signing route: review any enabled master or regular key as well. Test recovery on a non-production network before moving authority.
- Current translation: Eine Signer List vergibt Gewichte und ein Quorum. Zum Beispiel verlangen drei unabhängige Signer mit Gewicht eins und Quorum zwei genug gültige Signaturen, um ein Gesamtgewicht von zwei zu erreichen. Das schützt nur den beabsichtigten Signierweg: Prüfe auch jeden aktivierten Master Key oder Regular Key. Teste die Wiederherstellung in einem Netzwerk, das nicht der Produktion dient, bevor du Befugnis verschiebst.
- Approve:
- Correction:
- Reviewer:
- Date:

### 1.3 `a-xaman-payload-is-a-signing-request.d7a646f5`

- Risk tier: Wallet recovery and seed
- Page: Xaman flows (/xrpl/builders/xaman-flows.html)
- Heading on that page: Start with a clear request
- Purpose: This sentence is about the secret that can recreate the account.
- What the reader must understand: A seed or secret is not a resettable password. Anyone who has it can control the account. Changing an app password does not fix a leaked seed. The English wording to preserve is: A Xaman payload is a signing request. Your product should first explain the action, network, signing account, exact asset, recipient and amount or permissions. A sign-in identifies an account; it is not a payment. Never ask users to paste a seed, secret numbers or a private key into your page.
- English: A Xaman payload is a signing request. Your product should first explain the action, network, signing account, exact asset, recipient and amount or permissions. A sign-in identifies an account; it is not a payment. Never ask users to paste a seed, secret numbers or a private key into your page.
- Current translation: Ein Xaman-Payload ist eine Signieranfrage. Dein Produkt sollte zuerst die Aktion, das Netzwerk, das signierende Konto, das genaue Asset, den Empfänger und den Betrag oder die Berechtigungen erklären. Ein Sign-in identifiziert ein Konto; es ist keine Zahlung. Fordere Nutzer niemals auf, einen Seed, geheime Zahlen oder einen Private Key in deine Seite einzufügen.
- Approve:
- Correction:
- Reviewer:
- Date:

### 1.4 `are-read-only-learning-material-with.acd12af2`

- Risk tier: Wallet recovery and seed
- Page: Builders hub (/xrpl/builders/)
- Heading on that page: Three environments that must not be confused
- Purpose: This sentence is about the secret that can recreate the account.
- What the reader must understand: A seed or secret is not a resettable password. Anyone who has it can control the account. Changing an app password does not fix a leaked seed. The English wording to preserve is: {s1} are read-only learning material with fictional examples and local quiz feedback. {s2} is a separate ledger for later implementation rehearsal; its test assets do not pay Mainnet bills. {s3} carries real assets and consequences. Devnet can include experimental changes; success there does not establish Mainnet availability. Do not reuse real secrets in experiments. Check {s4} and the actual target amendment status before implementation.
- English: {s1} are read-only learning material with fictional examples and local quiz feedback. {s2} is a separate ledger for later implementation rehearsal; its test assets do not pay Mainnet bills. {s3} carries real assets and consequences. Devnet can include experimental changes; success there does not establish Mainnet availability. Do not reuse real secrets in experiments. Check {s4} and the actual target amendment status before implementation.
- Current translation: {s1} sind nur lesbares Lernmaterial mit fiktiven Beispielen und lokalem Quiz-Feedback. {s2} ist ein separates Ledger für spätere Umsetzungsproben; seine Test-Assets begleichen keine Mainnet-Rechnungen. Bei {s3} geht es um echte Assets und reale Folgen. Devnet kann experimentelle Änderungen enthalten; Erfolg dort begründet keine Verfügbarkeit auf Mainnet. Verwende echte Geheimnisse nicht erneut in Experimenten. Prüfe {s4} und den tatsächlichen Amendment-Status des Zielnetzwerks vor der Umsetzung.
- Approve:
- Correction:
- Reviewer:
- Date:

### 1.5 `assume-a-leaked-seed-is-permanently.0fc76985`

- Risk tier: Wallet recovery and seed
- Page: Safety (/xrpl/safety.html)
- Heading on that page: Protect signing authority
- Purpose: This sentence is about the secret that can recreate the account.
- What the reader must understand: A seed or secret is not a resettable password. Anyone who has it can control the account. Changing an app password does not fix a leaked seed. The English wording to preserve is: Assume a leaked seed is permanently compromised.
- English: Assume a leaked seed is permanently compromised.
- Current translation: Gehe davon aus, dass ein geleakter Seed dauerhaft kompromittiert ist.
- Approve:
- Correction:
- Reviewer:
- Date:

### 1.6 `bring-your-asset-specification-from.2de6be48`

- Risk tier: Wallet recovery and seed
- Page: NFT basics (/xrpl/builders/nft-basics.html)
- Heading on that page: Before you start
- Purpose: This sentence is about the secret that can recreate the account.
- What the reader must understand: A seed or secret is not a resettable password. Anyone who has it can control the account. Changing an app password does not fix a leaked seed. The English wording to preserve is: Bring your asset specification from lesson 1. Know the difference between a public identifier and a secret. You can complete every exercise using the fictional records below; opening an explorer is optional.
- English: Bring your asset specification from lesson 1. Know the difference between a public identifier and a secret. You can complete every exercise using the fictional records below; opening an explorer is optional.
- Current translation: Bring deine Asset-Spezifikation aus Lektion 1 mit. Kenne den Unterschied zwischen einer öffentlichen Kennung und einem Geheimnis. Du kannst jede Übung mit den fiktiven Datensätzen unten abschließen; einen Explorer zu öffnen ist optional.
- Approve:
- Correction:
- Reviewer:
- Date:

### 1.7 `can-a-seed-be-reset.4e3ce397`

- Risk tier: Wallet recovery and seed
- Page: Wallets (/xrpl/wallet-basics.html)
- Heading on that page: Can a seed be reset?
- Purpose: This sentence is about the secret that can recreate the account.
- What the reader must understand: A seed or secret is not a resettable password. Anyone who has it can control the account. Changing an app password does not fix a leaked seed. The English wording to preserve is: Can a seed be reset?
- English: Can a seed be reset?
- Current translation: Kann ein Seed zurückgesetzt werden?
- Approve:
- Correction:
- Reviewer:
- Date:

### 1.8 `create-a-failure-table-with-input-ex.2a93267d`

- Risk tier: Wallet recovery and seed
- Page: Project launch (/xrpl/builders/project-launch-basics.html)
- Heading on that page: Hold a tabletop launch review
- Purpose: This sentence is about the secret that can recreate the account.
- What the reader must understand: A seed or secret is not a resettable password. Anyone who has it can control the account. Changing an app password does not fix a leaked seed. The English wording to preserve is: Create a failure table with input, expected user message, stored state and recovery. Include rejection, wrong signer/network/asset/recipient, insufficient delivery, request expiry, network outage, duplicate callback, restart and stale data. For each, state what must never happen: no false receipt, duplicate entitlement or silent second payment.
- English: Create a failure table with input, expected user message, stored state and recovery. Include rejection, wrong signer/network/asset/recipient, insufficient delivery, request expiry, network outage, duplicate callback, restart and stale data. For each, state what must never happen: no false receipt, duplicate entitlement or silent second payment.
- Current translation: Erstelle eine Fehlertabelle mit Eingabe, erwarteter Nutzernachricht, gespeichertem Zustand und Wiederherstellung. Nimm Ablehnung, falschen Signer, falsches Netzwerk, falsches Asset, falschen Empfänger, unzureichende Lieferung, Ablauf der Anfrage, Netzwerkausfall, doppelten Callback, Neustart und veraltete Daten auf. Sag für jeden Fall, was niemals geschehen darf: kein falscher Beleg, keine doppelte Berechtigung und keine stille zweite Zahlung.
- Approve:
- Correction:
- Reviewer:
- Date:

### 1.9 `does-changing-an-app-password-fix-a.002dd115`

- Risk tier: Wallet recovery and seed
- Page: Safety (/xrpl/safety.html)
- Heading on that page: Does changing an app password fix a leaked seed?
- Purpose: This sentence is about the secret that can recreate the account.
- What the reader must understand: A seed or secret is not a resettable password. Anyone who has it can control the account. Changing an app password does not fix a leaked seed. The English wording to preserve is: Does changing an app password fix a leaked seed?
- English: Does changing an app password fix a leaked seed?
- Current translation: Behebt das Ändern eines App-Passworts die Kompromittierung eines geleakten Seeds?
- Approve:
- Correction:
- Reviewer:
- Date:

### 1.10 `draw-a-box-for-each-account-from-les.ad557ea8`

- Risk tier: Wallet recovery and seed
- Page: Issuer control (/xrpl/builders/issuer-control.html)
- Heading on that page: Map who can act for the club
- Purpose: This sentence is about the secret that can recreate the account.
- What the reader must understand: A seed or secret is not a resettable password. Anyone who has it can control the account. Changing an app password does not fix a leaked seed. The English wording to preserve is: Draw a box for each account from lesson 1. Under each, list enabled master signing, regular key and signer-list route separately. Add unknown if the public record does not answer a question; do not request anyone secret to complete the map.
- English: Draw a box for each account from lesson 1. Under each, list enabled master signing, regular key and signer-list route separately. Add unknown if the public record does not answer a question; do not request anyone secret to complete the map.
- Current translation: Zeichne für jedes Konto aus Lektion 1 ein Kästchen. Liste darunter aktiviertes Master-Signieren, Regular Key und den Signer-List-Weg getrennt auf. Schreib unbekannt, wenn der öffentliche Datensatz eine Frage nicht beantwortet; verlange von niemandem ein Geheimnis, um die Karte zu vervollständigen.
- Approve:
- Correction:
- Reviewer:
- Date:

### 1.11 `family-access-planning-and-ledger-si.553a225c`

- Risk tier: Wallet recovery and seed
- Page: Issuer control (/xrpl/builders/issuer-control.html)
- Heading on that page: Keep building
- Purpose: This sentence is about the secret that can recreate the account.
- What the reader must understand: A seed or secret is not a resettable password. Anyone who has it can control the account. Changing an app password does not fix a leaked seed. The English wording to preserve is: Family access planning and ledger signing authority are different layers; document both without exposing secrets.
- English: Family access planning and ledger signing authority are different layers; document both without exposing secrets.
- Current translation: Familienzugang und Signierbefugnis im Ledger sind verschiedene Ebenen; dokumentiere beide, ohne Geheimnisse offenzulegen.
- Approve:
- Correction:
- Reviewer:
- Date:

### 1.12 `freeze-restricts-movement-of-tokens.8ccf6190`

- Risk tier: Wallet recovery and seed
- Page: Issuer control (/xrpl/builders/issuer-control.html)
- Heading on that page: Words you will use
- Purpose: This sentence is about the secret that can recreate the account.
- What the reader must understand: A seed or secret is not a resettable password. Anyone who has it can control the account. Changing an app password does not fix a leaked seed. The English wording to preserve is: Freeze restricts movement of tokens; clawback can recover an issuer token balance when the capability is enabled. Neither applies to native XRP.
- English: Freeze restricts movement of tokens; clawback can recover an issuer token balance when the capability is enabled. Neither applies to native XRP.
- Current translation: Freeze beschränkt die Bewegung von Token; Clawback kann einen Saldo des vom Emittenten ausgegebenen Tokens zurückholen, wenn die Funktion aktiviert ist. Beides gilt nicht für natives XRP.
- Approve:
- Correction:
- Reviewer:
- Date:

### 1.13 `keep-backend-api-secrets-out-of-brow.f5ff651f`

- Risk tier: Wallet recovery and seed
- Page: Xaman flows (/xrpl/builders/xaman-flows.html)
- Heading on that page: Work through this example
- Purpose: This sentence is about the secret that can recreate the account.
- What the reader must understand: A seed or secret is not a resettable password. Anyone who has it can control the account. Changing an app password does not fix a leaked seed. The English wording to preserve is: Keep backend API secrets out of browser code. Use a documented Xaman integration model appropriate to the application. These pages have no wallet connection, QR signing request or submit action.
- English: Keep backend API secrets out of browser code. Use a documented Xaman integration model appropriate to the application. These pages have no wallet connection, QR signing request or submit action.
- Current translation: Halt Backend-API-Geheimnisse aus dem Browser-Code heraus. Nutze ein dokumentiertes Xaman-Integrationsmodell, das zur Anwendung passt. Diese Seiten haben keine Wallet-Verbindung, keine QR-Signieranfrage und keine Sendeaktion.
- Approve:
- Correction:
- Reviewer:
- Date:

### 1.14 `keep-the-seed-offline-and-private.ac2d7a8b`

- Risk tier: Wallet recovery and seed
- Page: Safety (/xrpl/safety.html)
- Heading on that page: Protect signing authority
- Purpose: This sentence is about the secret that can recreate the account.
- What the reader must understand: A seed or secret is not a resettable password. Anyone who has it can control the account. Changing an app password does not fix a leaked seed. The English wording to preserve is: Keep the seed offline and private.
- English: Keep the seed offline and private.
- Current translation: Halt den Seed offline und privat.
- Approve:
- Correction:
- Reviewer:
- Date:

### 1.15 `learn-and-inspect-first-no-wallet-co.b6c6fd0a`

- Risk tier: Wallet recovery and seed
- Page: Create a token; NFT basics; Trust lines lesson; Issuer control; Xaman flows; Project launch (/xrpl/builders/create-token.html; /xrpl/builders/nft-basics.html; /xrpl/builders/trust-lines.html; /xrpl/builders/issuer-control.html; /xrpl/builders/xaman-flows.html; /xrpl/builders/project-launch-basics.html)
- Heading on that page: Create a token with a clear identity; Read an NFT beyond its picture; Set a boundary for an issued asset; Know who can still change the rules; Follow a signing request to its real result; Launch something people can verify
- Purpose: This sentence is about the secret that can recreate the account.
- What the reader must understand: A seed or secret is not a resettable password. Anyone who has it can control the account. Changing an app password does not fix a leaked seed. The English wording to preserve is: Learn and inspect first. No wallet connection, seed entry, signing or transactions on this page.
- English: Learn and inspect first. No wallet connection, seed entry, signing or transactions on this page.
- Current translation: Lern und prüfe zuerst. Auf dieser Seite gibt es keine Wallet-Verbindung, keine Seed-Eingabe, kein Signieren und keine Transaktionen.
- Approve:
- Correction:
- Reviewer:
- Date:

### 1.16 `learn-custody-seeds-signing-funding.0a144ab8`

- Risk tier: Wallet recovery and seed
- Page: Definitions (/xrpl/definitions.html)
- Heading on that page: Keep moving
- Purpose: This sentence is about the secret that can recreate the account.
- What the reader must understand: A seed or secret is not a resettable password. Anyone who has it can control the account. Changing an app password does not fix a leaked seed. The English wording to preserve is: Learn custody, seeds, signing, funding, account control, and recovery limits.
- English: Learn custody, seeds, signing, funding, account control, and recovery limits.
- Current translation: Lern Verwahrung, Seeds, Signieren, Ausstattung mit Mitteln, Kontokontrolle und Grenzen der Wiederherstellung.
- Approve:
- Correction:
- Reviewer:
- Date:

### 1.17 `mark-irreversible-or-order-sensitive.88613afa`

- Risk tier: Wallet recovery and seed
- Page: Issuer control (/xrpl/builders/issuer-control.html)
- Heading on that page: Map who can act for the club
- Purpose: This sentence is about the secret that can recreate the account.
- What the reader must understand: A seed or secret is not a resettable password. Anyone who has it can control the account. Changing an app password does not fix a leaked seed. The English wording to preserve is: Mark irreversible or order-sensitive choices. No Freeze cannot be undone. Trust-line clawback must be deliberately enabled under its account requirements before the issuer has populated its owner directory; it is not a recovery button an issuer can freely add later. Check the exact current AccountSet rules before implementation.
- English: Mark irreversible or order-sensitive choices. No Freeze cannot be undone. Trust-line clawback must be deliberately enabled under its account requirements before the issuer has populated its owner directory; it is not a recovery button an issuer can freely add later. Check the exact current AccountSet rules before implementation.
- Current translation: Markiere unumkehrbare oder reihenfolgeempfindliche Entscheidungen. No Freeze kann nicht rückgängig gemacht werden. Trust-Line-Clawback muss unter seinen Kontovoraussetzungen bewusst aktiviert werden, bevor der Emittent sein Owner Directory befüllt hat; es ist kein Reparaturknopf, den ein Emittent später frei hinzufügen kann. Prüfe die genauen aktuellen AccountSet-Regeln vor der Umsetzung.
- Approve:
- Correction:
- Reviewer:
- Date:

### 1.18 `meta.wallet.description`

- Risk tier: Wallet recovery and seed
- Page: Wallets (/xrpl/wallet-basics.html)
- Heading on that page: Wallets
- Purpose: This sentence is about the secret that can recreate the account.
- What the reader must understand: A seed or secret is not a resettable password. Anyone who has it can control the account. Changing an app password does not fix a leaked seed. The English wording to preserve is: Control, custody, seeds, signing, funding, recovery, and the mistakes that cost people everything.
- English: Control, custody, seeds, signing, funding, recovery, and the mistakes that cost people everything.
- Current translation: Kontrolle, Verwahrung, Seeds, Signieren, Ausstattung mit Mitteln, Wiederherstellung und die Fehler, die Menschen alles kosten.
- Approve:
- Correction:
- Reviewer:
- Date:

### 1.19 `never-type-your-seed-into-a-random-w.9a621f43`

- Risk tier: Wallet recovery and seed
- Page: Wallets (/xrpl/wallet-basics.html)
- Heading on that page: Seeds, keys, and signatures
- Purpose: This sentence is about the secret that can recreate the account.
- What the reader must understand: A seed or secret is not a resettable password. Anyone who has it can control the account. Changing an app password does not fix a leaked seed. The English wording to preserve is: Never type your seed into a random website.
- English: Never type your seed into a random website.
- Current translation: Gib deinen Seed niemals auf einer zufälligen Website ein.
- Approve:
- Correction:
- Reviewer:
- Date:

### 1.20 `no-the-regular-key-remains-a-signing.03e57ab8`

- Risk tier: Wallet recovery and seed
- Page: Issuer control (/xrpl/builders/issuer-control.html)
- Heading on that page: Work through this example
- Purpose: This sentence is about the secret that can recreate the account.
- What the reader must understand: A seed or secret is not a resettable password. Anyone who has it can control the account. Changing an app password does not fix a leaked seed. The English wording to preserve is: No. The regular key remains a signing route with broad powers. Inspect its presence and the signer list, then document which actions remain possible. Public evidence of account configuration cannot prove how securely somebody stores a secret or whether a private key is truly unknown.
- English: No. The regular key remains a signing route with broad powers. Inspect its presence and the signer list, then document which actions remain possible. Public evidence of account configuration cannot prove how securely somebody stores a secret or whether a private key is truly unknown.
- Current translation: Nein. Der Regular Key bleibt ein Signierweg mit weitreichenden Befugnissen. Prüfe sein Vorhandensein und die Signer List und dokumentiere dann, welche Aktionen möglich bleiben. Öffentliche Nachweise zur Kontokonfiguration können nicht beweisen, wie sicher jemand ein Geheimnis aufbewahrt oder ob ein Private Key wirklich unbekannt ist.
- Approve:
- Correction:
- Reviewer:
- Date:

### 1.21 `prove-mismatched-payments-cannot-unl.c94250d1`

- Risk tier: Wallet recovery and seed
- Page: Project launch (/xrpl/builders/project-launch-basics.html)
- Heading on that page: Work through this example
- Purpose: This sentence is about the secret that can recreate the account.
- What the reader must understand: A seed or secret is not a resettable password. Anyone who has it can control the account. Changing an app password does not fix a leaked seed. The English wording to preserve is: Prove mismatched payments cannot unlock access, duplicates cannot double-credit, expiry and network outages recover, and records survive restart. Review the exact release diff, account authority and fee disclosures; rehearse backup/restore and rollback; assign support and monitoring. One happy-path payment is not full acceptance.
- English: Prove mismatched payments cannot unlock access, duplicates cannot double-credit, expiry and network outages recover, and records survive restart. Review the exact release diff, account authority and fee disclosures; rehearse backup/restore and rollback; assign support and monitoring. One happy-path payment is not full acceptance.
- Current translation: Weise nach, dass nicht passende Zahlungen keinen Zugang freischalten, Duplikate nicht zu doppelten Gutschriften führen, sich der Ablauf nach einem Fristablauf oder Netzwerkausfall wieder aufnehmen lässt und Datensätze einen Neustart überstehen. Prüfe die genauen Änderungen der Veröffentlichung, die Kontobefugnisse und die Gebührenoffenlegung; übe Sicherung, Wiederherstellung und Rollback; lege Verantwortliche für Support und Überwachung fest. Eine einzelne erfolgreiche Zahlung im Normalfall reicht nicht für eine vollständige Abnahme.
- Approve:
- Correction:
- Reviewer:
- Date:

### 1.22 `secret-seed.e3cdd578`

- Risk tier: Wallet recovery and seed
- Page: Wallets (/xrpl/wallet-basics.html)
- Heading on that page: Seeds, keys, and signatures
- Purpose: This sentence is about the secret that can recreate the account.
- What the reader must understand: A seed or secret is not a resettable password. Anyone who has it can control the account. Changing an app password does not fix a leaked seed. The English wording to preserve is: Secret seed
- English: Secret seed
- Current translation: Geheimer Seed
- Approve:
- Correction:
- Reviewer:
- Date:

### 1.23 `seed-shared.43114c2d`

- Risk tier: Wallet recovery and seed
- Page: Wallets (/xrpl/wallet-basics.html)
- Heading on that page: Wallet mistakes that destroy accounts
- Purpose: This sentence is about the secret that can recreate the account.
- What the reader must understand: A seed or secret is not a resettable password. Anyone who has it can control the account. Changing an app password does not fix a leaked seed. The English wording to preserve is: Seed shared:
- English: Seed shared:
- Current translation: Seed geteilt:
- Approve:
- Correction:
- Reviewer:
- Date:

### 1.24 `seed.32fe9f5b`

- Risk tier: Wallet recovery and seed
- Page: Definitions (/xrpl/definitions.html)
- Heading on that page: Seed
- Purpose: This sentence is about the secret that can recreate the account.
- What the reader must understand: A seed or secret is not a resettable password. Anyone who has it can control the account. Changing an app password does not fix a leaked seed. The English wording to preserve is: Seed
- English: Seed
- Current translation: (same as the English) Seed
- Approve:
- Correction:
- Reviewer:
- Date:

### 1.25 `seeds-keys-and-signatures.5b661568`

- Risk tier: Wallet recovery and seed
- Page: Wallets (/xrpl/wallet-basics.html)
- Heading on that page: Seeds, keys, and signatures
- Purpose: This sentence is about the secret that can recreate the account.
- What the reader must understand: A seed or secret is not a resettable password. Anyone who has it can control the account. Changing an app password does not fix a leaked seed. The English wording to preserve is: Seeds, keys, and signatures
- English: Seeds, keys, and signatures
- Current translation: Seeds, Schlüssel und Signaturen
- Approve:
- Correction:
- Reviewer:
- Date:

### 1.26 `separate-recovery-layers-reverting-a.e8e2e17b`

- Risk tier: Wallet recovery and seed
- Page: Project launch (/xrpl/builders/project-launch-basics.html)
- Heading on that page: Hold a tabletop launch review
- Purpose: This sentence is about the secret that can recreate the account.
- What the reader must understand: A seed or secret is not a resettable password. Anyone who has it can control the account. Changing an app password does not fix a leaked seed. The English wording to preserve is: Separate recovery layers. Reverting a page can hide a bad button; restoring a database can lose newer legitimate receipts; neither reverses ledger transfers. Document backup boundaries, restore verification and how reconciliation preserves transactions after the backup point.
- English: Separate recovery layers. Reverting a page can hide a bad button; restoring a database can lose newer legitimate receipts; neither reverses ledger transfers. Document backup boundaries, restore verification and how reconciliation preserves transactions after the backup point.
- Current translation: Trenn die Wiederherstellungsebenen. Eine Seite zurückzusetzen kann eine schlechte Schaltfläche verbergen; eine Datenbank wiederherzustellen kann neuere rechtmäßige Belege verlieren; keines von beiden macht Ledger-Übertragungen rückgängig. Dokumentiere Sicherungsgrenzen, die Prüfung der Wiederherstellung und wie der Abgleich Transaktionen nach dem Sicherungszeitpunkt erhält.
- Approve:
- Correction:
- Reviewer:
- Date:

### 1.27 `someone-asks-for-your-seed.d7298656`

- Risk tier: Wallet recovery and seed
- Page: Safety (/xrpl/safety.html)
- Heading on that page: Phishing and fake connection flows
- Purpose: This sentence is about the secret that can recreate the account.
- What the reader must understand: A seed or secret is not a resettable password. Anyone who has it can control the account. Changing an app password does not fix a leaked seed. The English wording to preserve is: {s1} Someone asks for your seed.
- English: {s1} Someone asks for your seed.
- Current translation: {s1} Jemand fragt nach deinem Seed.
- Approve:
- Correction:
- Reviewer:
- Date:

### 1.28 `start-here-be-able-to-distinguish-a.8a3a6b4c`

- Risk tier: Wallet recovery and seed
- Page: Create a token (/xrpl/builders/create-token.html)
- Heading on that page: Before you start
- Purpose: This sentence is about the secret that can recreate the account.
- What the reader must understand: A seed or secret is not a resettable password. Anyone who has it can control the account. Changing an app password does not fix a leaked seed. The English wording to preserve is: Start here. Be able to distinguish a public account address from a private signing secret. If that is unfamiliar, read Wallet Basics first. You need only a notebook; no account, funds or coding tools.
- English: Start here. Be able to distinguish a public account address from a private signing secret. If that is unfamiliar, read Wallet Basics first. You need only a notebook; no account, funds or coding tools.
- Current translation: Beginne hier. Du solltest eine öffentliche Kontoadresse von einem privaten Signiergeheimnis unterscheiden können. Wenn dir das unbekannt ist, lies zuerst die Wallet-Grundlagen. Du brauchst nur ein Notizbuch; kein Konto, keine Mittel und keine Programmierwerkzeuge.
- Approve:
- Correction:
- Reviewer:
- Date:

### 1.29 `the-secret-authority-that-proves-you.94c08ea2`

- Risk tier: Wallet recovery and seed
- Page: Definitions (/xrpl/definitions.html)
- Heading on that page: Private Keys
- Purpose: This sentence is about the secret that can recreate the account.
- What the reader must understand: A seed or secret is not a resettable password. Anyone who has it can control the account. Changing an app password does not fix a leaked seed. The English wording to preserve is: The secret authority that proves you control the account. Whoever controls the keys controls the account.
- English: The secret authority that proves you control the account. Whoever controls the keys controls the account.
- Current translation: Die geheime Befugnis, die beweist, dass du das Konto kontrollierst. Wer die Schlüssel kontrolliert, kontrolliert das Konto.
- Approve:
- Correction:
- Reviewer:
- Date:

### 1.30 `the-server-side-part-of-an-applicati.d228df9c`

- Risk tier: Wallet recovery and seed
- Page: Xaman flows (/xrpl/builders/xaman-flows.html)
- Heading on that page: Words you will use
- Purpose: This sentence is about the secret that can recreate the account.
- What the reader must understand: A seed or secret is not a resettable password. Anyone who has it can control the account. Changing an app password does not fix a leaked seed. The English wording to preserve is: The server-side part of an application where secrets and authoritative order checks belong.
- English: The server-side part of an application where secrets and authoritative order checks belong.
- Current translation: Der serverseitige Teil einer Anwendung, in den Geheimnisse und die maßgeblichen Bestellprüfungen gehören.
- Approve:
- Correction:
- Reviewer:
- Date:

### 1.31 `use-separate-test-accounts-and-a-non.d2a66d3c`

- Risk tier: Wallet recovery and seed
- Page: Project launch (/xrpl/builders/project-launch-basics.html)
- Heading on that page: Rehearse the unhappy paths
- Purpose: This sentence is about the secret that can recreate the account.
- What the reader must understand: A seed or secret is not a resettable password. Anyone who has it can control the account. Changing an app password does not fix a leaked seed. The English wording to preserve is: Use separate test accounts and a non-production network. Rehearse rejected signatures, expiry, insufficient funds/reserve, wrong network, unavailable RPC and duplicate callbacks. Keep secrets outside frontend assets and logs. Verify current wallet support and amendment availability for the actual network; a documentation page is not evidence of activation everywhere.
- English: Use separate test accounts and a non-production network. Rehearse rejected signatures, expiry, insufficient funds/reserve, wrong network, unavailable RPC and duplicate callbacks. Keep secrets outside frontend assets and logs. Verify current wallet support and amendment availability for the actual network; a documentation page is not evidence of activation everywhere.
- Current translation: Nutze getrennte Testkonten und ein Netzwerk, das nicht der Produktion dient. Probiere abgelehnte Signaturen, Ablauf, unzureichende Mittel oder Reserve, falsches Netzwerk, nicht verfügbares RPC und doppelte Callbacks. Halt Geheimnisse außerhalb von Frontend-Dateien und Protokollen. Prüfe die aktuelle Wallet-Unterstützung und die Amendment-Verfügbarkeit für das tatsächliche Netzwerk; eine Dokumentationsseite ist kein Nachweis für Aktivierung überall.
- Approve:
- Correction:
- Reviewer:
- Date:

### 1.32 `write-recovery-scenarios-on-paper-on.cab7e62d`

- Risk tier: Wallet recovery and seed
- Page: Issuer control (/xrpl/builders/issuer-control.html)
- Heading on that page: Map who can act for the club
- Purpose: This sentence is about the secret that can recreate the account.
- What the reader must understand: A seed or secret is not a resettable password. Anyone who has it can control the account. Changing an app password does not fix a leaked seed. The English wording to preserve is: Write recovery scenarios on paper: one signer unavailable; two unavailable; one compromised; the regular-key custodian absent. State which actions remain possible and who decides to pause operations. A private off-ledger promise to require two approvals is not the same as ledger enforcement.
- English: Write recovery scenarios on paper: one signer unavailable; two unavailable; one compromised; the regular-key custodian absent. State which actions remain possible and who decides to pause operations. A private off-ledger promise to require two approvals is not the same as ledger enforcement.
- Current translation: Schreib Wiederherstellungsszenarien auf Papier: ein Signer nicht verfügbar; zwei nicht verfügbar; einer kompromittiert; die verwahrende Person des Regular Key abwesend. Sag, welche Aktionen möglich bleiben und wer entscheidet, den Betrieb anzuhalten. Ein privates Versprechen außerhalb des Ledgers, zwei Genehmigungen zu verlangen, ist nicht dasselbe wie Durchsetzung im Ledger.
- Approve:
- Correction:
- Reviewer:
- Date:

### 1.33 `your-seed-isn-t-a-password-there-s-n.3a1be27d`

- Risk tier: Wallet recovery and seed
- Page: Wallets (/xrpl/wallet-basics.html)
- Heading on that page: Seeds, keys, and signatures
- Purpose: This sentence is about the secret that can recreate the account.
- What the reader must understand: A seed or secret is not a resettable password. Anyone who has it can control the account. Changing an app password does not fix a leaked seed. The English wording to preserve is: Your seed isn’t a password. There’s no reset desk behind the ledger.
- English: Your seed isn’t a password. There’s no reset desk behind the ledger.
- Current translation: Dein Seed ist kein Passwort. Hinter dem Ledger gibt es keinen Schalter zum Zurücksetzen.
- Approve:
- Correction:
- Reviewer:
- Date:

## 2. Signing

This sentence is about who is allowed to authorize a transaction.

What the reader must understand for this whole section: A signature authorizes the exact transaction the signer approved. A sign-in is not a payment, and the wrong signer, key, or quorum does not become valid because the interface looked finished.

### 2.1 `a-callback-is-a-reason-for-the-backe.50625123`

- Risk tier: Signing
- Page: Xaman flows (/xrpl/builders/xaman-flows.html)
- Heading on that page: Verify beyond the callback
- Purpose: This sentence is about who is allowed to authorize a transaction.
- What the reader must understand: A signature authorizes the exact transaction the signer approved. A sign-in is not a payment, and the wrong signer, key, or quorum does not become valid because the interface looked finished. The English wording to preserve is: A callback is a reason for the backend to fetch the payload result, not proof to trust blindly. Check the resolved/signed state, expected account and intended network. For a ledger transaction, look up its transaction hash and verify validation, result and the exact intended operation. A signed request can still fail or remain unresolved on ledger.
- English: A callback is a reason for the backend to fetch the payload result, not proof to trust blindly. Check the resolved/signed state, expected account and intended network. For a ledger transaction, look up its transaction hash and verify validation, result and the exact intended operation. A signed request can still fail or remain unresolved on ledger.
- Current translation: Ein Callback ist ein Anlass für das Backend, das Payload-Ergebnis abzurufen, und kein Beweis für blindes Vertrauen. Prüfe den Zustand resolved/signed, das erwartete Konto und das beabsichtigte Netzwerk. Bei einer Ledger-Transaktion schlage ihren Transaktions-Hash nach und prüfe Validierung, Ergebnis und den genau beabsichtigten Vorgang. Eine signierte Anfrage kann im Ledger trotzdem fehlschlagen oder unaufgelöst bleiben.
- Approve:
- Correction:
- Reviewer:
- Date:

### 2.2 `a-fictional-club-proposes-1-000-club.bd5125de`

- Risk tier: Signing
- Page: Create a token (/xrpl/builders/create-token.html)
- Heading on that page: Work through this example
- Purpose: This sentence is about who is allowed to authorize a transaction.
- What the reader must understand: A signature authorizes the exact transaction the signer approved. A sign-in is not a payment, and the wrong signer, key, or quorum does not become valid because the interface looked finished. The English wording to preserve is: A fictional club proposes 1,000 CLUB credits. Its launch sheet lists a logo and ticker, but no issuer address, redemption policy or signing authority. What must be added before a member could identify the asset or judge the promise?
- English: A fictional club proposes 1,000 CLUB credits. Its launch sheet lists a logo and ticker, but no issuer address, redemption policy or signing authority. What must be added before a member could identify the asset or judge the promise?
- Current translation: Ein fiktiver Club schlägt 1.000 CLUB-Credits vor. Sein Startblatt nennt ein Logo und einen Ticker, aber keine Emittentenadresse, keine Einlösepolitik und keine Signierbefugnis. Was muss ergänzt werden, bevor ein Mitglied das Asset identifizieren oder das Versprechen beurteilen könnte?
- Approve:
- Correction:
- Reviewer:
- Date:

### 2.3 `a-multisigning-setup-requiring-enoug.5a733927`

- Risk tier: Signing
- Page: Wallets (/xrpl/wallet-basics.html)
- Heading on that page: Signer List
- Purpose: This sentence is about who is allowed to authorize a transaction.
- What the reader must understand: A signature authorizes the exact transaction the signer approved. A sign-in is not a payment, and the wrong signer, key, or quorum does not become valid because the interface looked finished. The English wording to preserve is: A multisigning setup requiring enough signer weight.
- English: A multisigning setup requiring enough signer weight.
- Current translation: Ein Multisigning-Aufbau, der genug Signer-Gewicht verlangt.
- Approve:
- Correction:
- Reviewer:
- Date:

### 2.4 `a-project-says-master-key-disabled-t.dc0aa5ea`

- Risk tier: Signing
- Page: Issuer control (/xrpl/builders/issuer-control.html)
- Heading on that page: Work through this example
- Purpose: This sentence is about who is allowed to authorize a transaction.
- What the reader must understand: A signature authorizes the exact transaction the signer approved. A sign-in is not a payment, and the wrong signer, key, or quorum does not become valid because the interface looked finished. The English wording to preserve is: A project says “master key disabled, therefore nobody can change anything.” Its account still has an enabled regular key. Is the conclusion supported?
- English: A project says “master key disabled, therefore nobody can change anything.” Its account still has an enabled regular key. Is the conclusion supported?
- Current translation: Ein Projekt sagt: „Master Key deaktiviert, also kann niemand etwas ändern.“ Sein Konto hat weiterhin einen aktivierten Regular Key. Ist die Schlussfolgerung belegt?
- Approve:
- Correction:
- Reviewer:
- Date:

### 2.5 `a-regular-key-is-a-separate-signing.81ac6af9`

- Risk tier: Signing
- Page: Issuer control (/xrpl/builders/issuer-control.html)
- Heading on that page: Check your understanding
- Purpose: This sentence is about who is allowed to authorize a transaction.
- What the reader must understand: A signature authorizes the exact transaction the signer approved. A sign-in is not a payment, and the wrong signer, key, or quorum does not become valid because the interface looked finished. The English wording to preserve is: A regular key is a separate signing route.
- English: A regular key is a separate signing route.
- Current translation: Ein Regular Key ist ein separater Signierweg.
- Approve:
- Correction:
- Reviewer:
- Date:

### 2.6 `a-support-message-says-your-25-credi.f5084773`

- Risk tier: Signing
- Page: Trust lines lesson (/xrpl/builders/trust-lines.html)
- Heading on that page: Read a member account before changing anything
- Purpose: This sentence is about who is allowed to authorize a transaction.
- What the reader must understand: A signature authorizes the exact transaction the signer approved. A sign-in is not a payment, and the wrong signer, key, or quorum does not become valid because the interface looked finished. The English wording to preserve is: A support message says your 25 credits are stuck because your limit is only 100 and asks you to sign an unlimited limit. That explanation does not follow from the sample. Inspect the exact failure, issuer/network, authorization, freezes, destination and intended operation first. Increasing a limit is not a general repair for token problems.
- English: A support message says your 25 credits are stuck because your limit is only 100 and asks you to sign an unlimited limit. That explanation does not follow from the sample. Inspect the exact failure, issuer/network, authorization, freezes, destination and intended operation first. Increasing a limit is not a general repair for token problems.
- Current translation: Eine Support-Nachricht sagt, deine 25 Credits steckten fest, weil dein Limit nur 100 sei, und fordert dich auf, ein unbegrenztes Limit zu signieren. Diese Erklärung folgt nicht aus dem Beispiel. Prüfe zuerst den genauen Fehler, Emittent und Netzwerk, die Autorisierung, Freezes, das Ziel und den beabsichtigten Vorgang. Ein Limit zu erhöhen ist keine allgemeine Reparatur für Token-Probleme.
- Approve:
- Correction:
- Reviewer:
- Date:

### 2.7 `an-attempt-to-remove-usable-account.dbb3b496`

- Risk tier: Signing
- Page: Issuer control (/xrpl/builders/issuer-control.html)
- Heading on that page: Words you will use
- Purpose: This sentence is about who is allowed to authorize a transaction.
- What the reader must understand: A signature authorizes the exact transaction the signer approved. A sign-in is not a payment, and the wrong signer, key, or quorum does not become valid because the interface looked finished. The English wording to preserve is: An attempt to remove usable account signing authority. Treat it as a permanent loss-of-control decision, not a safety rating.
- English: An attempt to remove usable account signing authority. Treat it as a permanent loss-of-control decision, not a safety rating.
- Current translation: Ein Versuch, nutzbare Signierbefugnis eines Kontos zu entfernen. Behandle ihn als dauerhafte Entscheidung über den Verlust der Kontrolle, nicht als Sicherheitsbewertung.
- Approve:
- Correction:
- Reviewer:
- Date:

### 2.8 `an-explorer-asks-for-a-signature-jus.626777f6`

- Risk tier: Signing
- Page: Trust lines lesson (/xrpl/builders/trust-lines.html)
- Heading on that page: An explorer asks for a signature just to inspect a public trust line. Is that necessary for reading?
- Purpose: This sentence is about who is allowed to authorize a transaction.
- What the reader must understand: A signature authorizes the exact transaction the signer approved. A sign-in is not a payment, and the wrong signer, key, or quorum does not become valid because the interface looked finished. The English wording to preserve is: An explorer asks for a signature just to inspect a public trust line. Is that necessary for reading?
- English: An explorer asks for a signature just to inspect a public trust line. Is that necessary for reading?
- Current translation: Ein Explorer verlangt eine Signatur, nur um eine öffentliche Trust Line anzusehen. Ist das zum Lesen nötig?
- Approve:
- Correction:
- Reviewer:
- Date:

### 2.9 `ask-whether-the-task-needs-a-trust-l.0a67f2fc`

- Risk tier: Signing
- Page: Trust lines lesson (/xrpl/builders/trust-lines.html)
- Heading on that page: Read a member account before changing anything
- Purpose: This sentence is about who is allowed to authorize a transaction.
- What the reader must understand: A signature authorizes the exact transaction the signer approved. A sign-in is not a payment, and the wrong signer, key, or quorum does not become valid because the interface looked finished. The English wording to preserve is: Ask whether the task needs a trust line at all. Reading a public record needs no signature. Receiving native XRP needs no trust line. Avoid adding a setting just because an advertisement labels it mandatory.
- English: Ask whether the task needs a trust line at all. Reading a public record needs no signature. Receiving native XRP needs no trust line. Avoid adding a setting just because an advertisement labels it mandatory.
- Current translation: Frag, ob die Aufgabe überhaupt eine Trust Line braucht. Einen öffentlichen Datensatz zu lesen braucht keine Signatur. Natives XRP zu empfangen braucht keine Trust Line. Füge eine Einstellung nicht nur hinzu, weil eine Werbung sie als verpflichtend bezeichnet.
- Approve:
- Correction:
- Reviewer:
- Date:

### 2.10 `before-a-request-exists-write-the-st.eb61acbb`

- Risk tier: Signing
- Page: Xaman flows (/xrpl/builders/xaman-flows.html)
- Heading on that page: Walk a pretend booking through every state
- Purpose: This sentence is about who is allowed to authorize a transaction.
- What the reader must understand: A signature authorizes the exact transaction the signer approved. A sign-in is not a payment, and the wrong signer, key, or quorum does not become valid because the interface looked finished. The English wording to preserve is: Before a request exists, write the stored intent: customer/session, expected action, expected signer where required, destination, network, asset, amount, any routing tag, expiry and order reference. A wallet address typed into a box is not proof of control.
- English: Before a request exists, write the stored intent: customer/session, expected action, expected signer where required, destination, network, asset, amount, any routing tag, expiry and order reference. A wallet address typed into a box is not proof of control.
- Current translation: Schreib die gespeicherte Absicht, bevor eine Anfrage existiert: Kunde oder Sitzung, erwartete Aktion, erwarteter Signer wo nötig, Ziel, Netzwerk, Asset, Betrag, jedes Routing-Tag, Ablauf und Bestellreferenz. Eine Wallet-Adresse, die in ein Feld getippt wird, ist kein Beweis für Kontrolle.
- Approve:
- Correction:
- Reviewer:
- Date:

### 2.11 `bind-the-request-identifier-to-o-17.c97a7290`

- Risk tier: Signing
- Page: Xaman flows (/xrpl/builders/xaman-flows.html)
- Heading on that page: Walk a pretend booking through every state
- Purpose: This sentence is about who is allowed to authorize a transaction.
- What the reader must understand: A signature authorizes the exact transaction the signer approved. A sign-in is not a payment, and the wrong signer, key, or quorum does not become valid because the interface looked finished. The English wording to preserve is: Bind the request identifier to O-17 on the backend. On notification, fetch the payload result and compare it with that record. Confirm the expected signer and network. For SignIn verify the bound proof and session; there is no payment transaction to pretend was received.
- English: Bind the request identifier to O-17 on the backend. On notification, fetch the payload result and compare it with that record. Confirm the expected signer and network. For SignIn verify the bound proof and session; there is no payment transaction to pretend was received.
- Current translation: Binde die Anfragekennung im Backend an O-17. Ruf bei einer Benachrichtigung das Payload-Ergebnis ab und vergleiche es mit diesem Datensatz. Bestätige den erwarteten Signer und das Netzwerk. Prüfe bei SignIn den gebundenen Nachweis und die Sitzung; es gibt keine Payment-Transaktion, die man als eingegangen ausgeben könnte.
- Approve:
- Correction:
- Reviewer:
- Date:

### 2.12 `blind-qr.72c0d255`

- Risk tier: Signing
- Page: Safety (/xrpl/safety.html)
- Heading on that page: Phishing and fake connection flows
- Purpose: This sentence is about who is allowed to authorize a transaction.
- What the reader must understand: A signature authorizes the exact transaction the signer approved. A sign-in is not a payment, and the wrong signer, key, or quorum does not become valid because the interface looked finished. The English wording to preserve is: Blind QR:
- English: Blind QR:
- Current translation: Blindes QR-Scannen:
- Approve:
- Correction:
- Reviewer:
- Date:

### 2.13 `blind-signing.3a15e830`

- Risk tier: Signing
- Page: Wallets (/xrpl/wallet-basics.html)
- Heading on that page: Wallet mistakes that destroy accounts
- Purpose: This sentence is about who is allowed to authorize a transaction.
- What the reader must understand: A signature authorizes the exact transaction the signer approved. A sign-in is not a payment, and the wrong signer, key, or quorum does not become valid because the interface looked finished. The English wording to preserve is: Blind signing:
- English: Blind signing:
- Current translation: Blindes Signieren:
- Approve:
- Correction:
- Reviewer:
- Date:

### 2.14 `check-delegated-permissions-too.d6011765`

- Risk tier: Signing
- Page: Issuer control (/xrpl/builders/issuer-control.html)
- Heading on that page: Check delegated permissions too
- Purpose: This sentence is about who is allowed to authorize a transaction.
- What the reader must understand: A signature authorizes the exact transaction the signer approved. A sign-in is not a payment, and the wrong signer, key, or quorum does not become valid because the interface looked finished. The English wording to preserve is: Check delegated permissions too
- English: Check delegated permissions too
- Current translation: Prüfe auch delegierte Berechtigungen
- Approve:
- Correction:
- Reviewer:
- Date:

### 2.15 `compare-against-the-intended-identit.e3f280f0`

- Risk tier: Signing
- Page: Xaman flows (/xrpl/builders/xaman-flows.html)
- Heading on that page: A different wallet answered the request
- Purpose: This sentence is about who is allowed to authorize a transaction.
- What the reader must understand: A signature authorizes the exact transaction the signer approved. A sign-in is not a payment, and the wrong signer, key, or quorum does not become valid because the interface looked finished. The English wording to preserve is: Compare against the intended identity and policy. Reject a wrong signer where account control is required; do not silently relabel the order owner.
- English: Compare against the intended identity and policy. Reject a wrong signer where account control is required; do not silently relabel the order owner.
- Current translation: Vergleiche mit der beabsichtigten Identität und Richtlinie. Weise einen falschen Signer zurück, wo Kontokontrolle nötig ist; benenne den Bestellinhaber nicht still um.
- Approve:
- Correction:
- Reviewer:
- Date:

### 2.16 `does-disabling-master-signing-disabl.02780c47`

- Risk tier: Signing
- Page: Issuer control (/xrpl/builders/issuer-control.html)
- Heading on that page: Does disabling master signing disable a regular key too?
- Purpose: This sentence is about who is allowed to authorize a transaction.
- What the reader must understand: A signature authorizes the exact transaction the signer approved. A sign-in is not a payment, and the wrong signer, key, or quorum does not become valid because the interface looked finished. The English wording to preserve is: Does disabling master signing disable a regular key too?
- English: Does disabling master signing disable a regular key too?
- Current translation: Schaltet das Deaktivieren des Master-Signierens auch einen Regular Key aus?
- Approve:
- Correction:
- Reviewer:
- Date:

### 2.17 `fictional-issuer-a-has-master-signin.286a3096`

- Risk tier: Signing
- Page: Issuer control (/xrpl/builders/issuer-control.html)
- Heading on that page: Map who can act for the club
- Purpose: This sentence is about who is allowed to authorize a transaction.
- What the reader must understand: A signature authorizes the exact transaction the signer approved. A sign-in is not a payment, and the wrong signer, key, or quorum does not become valid because the interface looked finished. The English wording to preserve is: Fictional Issuer A has master signing disabled, a regular key assigned, and a signer list of three people with weight one each and quorum two. This is an inspection example, not a suggested configuration.
- English: Fictional Issuer A has master signing disabled, a regular key assigned, and a signer list of three people with weight one each and quorum two. This is an inspection example, not a suggested configuration.
- Current translation: Der fiktive Issuer A hat Master-Signieren deaktiviert, einen Regular Key zugewiesen und eine Signer List aus drei Personen mit jeweils Gewicht eins und Quorum zwei. Das ist ein Prüfbeispiel, keine empfohlene Konfiguration.
- Approve:
- Correction:
- Reviewer:
- Date:

### 2.18 `for-the-signer-list-route-calculate.3ed3575f`

- Risk tier: Signing
- Page: Issuer control (/xrpl/builders/issuer-control.html)
- Heading on that page: Map who can act for the club
- Purpose: This sentence is about who is allowed to authorize a transaction.
- What the reader must understand: A signature authorizes the exact transaction the signer approved. A sign-in is not a payment, and the wrong signer, key, or quorum does not become valid because the interface looked finished. The English wording to preserve is: For the signer-list route, calculate that any two weight-one signers reach quorum two, while one does not. Now circle the regular-key route: it is an alternative signing route. A two-person signer list does not force two-person control over every transaction while a separate single-key route remains.
- English: For the signer-list route, calculate that any two weight-one signers reach quorum two, while one does not. Now circle the regular-key route: it is an alternative signing route. A two-person signer list does not force two-person control over every transaction while a separate single-key route remains.
- Current translation: Rechne für den Signer-List-Weg aus, dass zwei beliebige Signer mit Gewicht eins das Quorum zwei erreichen, einer aber nicht. Kreise jetzt den Regular-Key-Weg ein: Er ist ein alternativer Signierweg. Eine Signer List, die die Freigabe durch zwei Personen verlangt, erzwingt keine Kontrolle durch zwei Personen über jede Transaktion, solange ein separater Weg mit einem einzelnen Schlüssel bleibt.
- Approve:
- Correction:
- Reviewer:
- Date:

### 2.19 `inspect-a-public-account-using-a-rea.e2e1a467`

- Risk tier: Signing
- Page: Issuer control (/xrpl/builders/issuer-control.html)
- Heading on that page: Optional: connect the worksheet to a public record
- Purpose: This sentence is about who is allowed to authorize a transaction.
- What the reader must understand: A signature authorizes the exact transaction the signer approved. A sign-in is not a payment, and the wrong signer, key, or quorum does not become valid because the interface looked finished. The English wording to preserve is: Inspect a public account using a read-only explorer: look for account flags, regular key, signer list and any delegation records supported by that network. Use the linked official definitions to interpret names. Capture public facts only, with their observation time. A missing explorer panel is not proof that an authority route does not exist; use complete ledger data or leave the item unresolved.
- English: Inspect a public account using a read-only explorer: look for account flags, regular key, signer list and any delegation records supported by that network. Use the linked official definitions to interpret names. Capture public facts only, with their observation time. A missing explorer panel is not proof that an authority route does not exist; use complete ledger data or leave the item unresolved.
- Current translation: Prüfe ein öffentliches Konto in einem nur lesbaren Explorer: such Konto-Flags, Regular Key, Signer List und Delegationsdatensätze, die dieses Netzwerk unterstützt. Nutze die verlinkten offiziellen Definitionen, um Namen zu deuten. Halt nur öffentliche Fakten fest, mit dem Zeitpunkt der Beobachtung. Ein fehlendes Explorer-Feld ist kein Beweis, dass ein Befugnisweg nicht existiert; nutze vollständige Ledger-Daten oder lass den Punkt ungelöst.
- Approve:
- Correction:
- Reviewer:
- Date:

### 2.20 `inspect-public-information-without-s.3f3b7211`

- Risk tier: Signing
- Page: Trust lines lesson (/xrpl/builders/trust-lines.html)
- Heading on that page: Work through this example
- Purpose: This sentence is about who is allowed to authorize a transaction.
- What the reader must understand: A signature authorizes the exact transaction the signer approved. A sign-in is not a payment, and the wrong signer, key, or quorum does not become valid because the interface looked finished. The English wording to preserve is: Inspect public information without signing. Check the full issuer address and network, why a trust line is needed, the proposed limit and flags, issuer authorization/freeze controls, and reserve implications. A public wallet lookup does not require granting a trust line. A large limit is not a quality signal.
- English: Inspect public information without signing. Check the full issuer address and network, why a trust line is needed, the proposed limit and flags, issuer authorization/freeze controls, and reserve implications. A public wallet lookup does not require granting a trust line. A large limit is not a quality signal.
- Current translation: Prüfe öffentliche Informationen, ohne zu signieren. Prüfe die vollständige Emittentenadresse und das Netzwerk, warum eine Trust Line nötig ist, das vorgeschlagene Limit und die Flags, die Autorisierungs- und Freeze-Kontrollen des Emittenten und die Folgen für die Reserve. Ein öffentliches Nachschlagen einer Wallet verlangt nicht, eine Trust Line zu gewähren. Ein großes Limit ist kein Qualitätssignal.
- Approve:
- Correction:
- Reviewer:
- Date:

### 2.21 `inspect-signer-weights-quorum-author.ad6c69bd`

- Risk tier: Signing
- Page: Issuer control (/xrpl/builders/issuer-control.html)
- Heading on that page: Two signatures still fail
- Purpose: This sentence is about who is allowed to authorize a transaction.
- What the reader must understand: A signature authorizes the exact transaction the signer approved. A sign-in is not a payment, and the wrong signer, key, or quorum does not become valid because the interface looked finished. The English wording to preserve is: Inspect signer weights, quorum, authorized signer identities and the intended account/network. Do not weaken quorum or enable another key as a quick fix.
- English: Inspect signer weights, quorum, authorized signer identities and the intended account/network. Do not weaken quorum or enable another key as a quick fix.
- Current translation: Prüfe Signer-Gewichte, Quorum, autorisierte Signer-Identitäten und das beabsichtigte Konto und Netzwerk. Senke das Quorum nicht und aktiviere keinen weiteren Schlüssel als schnelle Reparatur.
- Approve:
- Correction:
- Reviewer:
- Date:

### 2.22 `list-the-issuer-operational-accounts.7d59a5dd`

- Risk tier: Signing
- Page: Issuer control (/xrpl/builders/issuer-control.html)
- Heading on that page: Make an authority map
- Purpose: This sentence is about who is allowed to authorize a transaction.
- What the reader must understand: A signature authorizes the exact transaction the signer approved. A sign-in is not a payment, and the wrong signer, key, or quorum does not become valid because the interface looked finished. The English wording to preserve is: List the issuer, operational accounts, enabled master signing, regular key and signer list. A regular key can authorize most account actions; it is not merely a read-only API credential. Disabling master signing does not prove that all other signing routes are gone.
- English: List the issuer, operational accounts, enabled master signing, regular key and signer list. A regular key can authorize most account actions; it is not merely a read-only API credential. Disabling master signing does not prove that all other signing routes are gone.
- Current translation: Liste den Emittenten, die Betriebskonten, aktiviertes Master-Signieren, Regular Key und Signer List. Ein Regular Key kann die meisten Kontoaktionen autorisieren; er ist nicht bloß ein API-Zugangsschlüssel mit reinem Lesezugriff. Master-Signieren zu deaktivieren beweist nicht, dass alle anderen Signierwege weg sind.
- Approve:
- Correction:
- Reviewer:
- Date:

### 2.23 `master-key.15d812b8`

- Risk tier: Signing
- Page: Wallets (/xrpl/wallet-basics.html)
- Heading on that page: Master Key
- Purpose: This sentence is about who is allowed to authorize a transaction.
- What the reader must understand: A signature authorizes the exact transaction the signer approved. A sign-in is not a payment, and the wrong signer, key, or quorum does not become valid because the interface looked finished. The English wording to preserve is: Master Key
- English: Master Key
- Current translation: (same as the English) Master Key
- Approve:
- Correction:
- Reviewer:
- Date:

### 2.24 `master-key.68952d53`

- Risk tier: Signing
- Page: Issuer control (/xrpl/builders/issuer-control.html)
- Heading on that page: Words you will use
- Purpose: This sentence is about who is allowed to authorize a transaction.
- What the reader must understand: A signature authorizes the exact transaction the signer approved. A sign-in is not a payment, and the wrong signer, key, or quorum does not become valid because the interface looked finished. The English wording to preserve is: Master key
- English: Master key
- Current translation: Master Key
- Approve:
- Correction:
- Reviewer:
- Date:

### 2.25 `meta.safety.description`

- Risk tier: Signing
- Page: Safety (/xrpl/safety.html)
- Heading on that page: Safety
- Purpose: This sentence is about who is allowed to authorize a transaction.
- What the reader must understand: A signature authorizes the exact transaction the signer approved. A sign-in is not a payment, and the wrong signer, key, or quorum does not become valid because the interface looked finished. The English wording to preserve is: Issuer verification, phishing defense, signing review, custody risk, and what to do when something goes wrong.
- English: Issuer verification, phishing defense, signing review, custody risk, and what to do when something goes wrong.
- Current translation: Prüfung von Emittenten, Abwehr von Phishing, Prüfung beim Signieren, Verwahrungsrisiko und was zu tun ist, wenn etwas schiefgeht.
- Approve:
- Correction:
- Reviewer:
- Date:

### 2.26 `multisigning.632671a2`

- Risk tier: Signing
- Page: Builders hub (/xrpl/builders/)
- Heading on that page: Multisigning
- Purpose: This sentence is about who is allowed to authorize a transaction.
- What the reader must understand: A signature authorizes the exact transaction the signer approved. A sign-in is not a payment, and the wrong signer, key, or quorum does not become valid because the interface looked finished. The English wording to preserve is: Multisigning
- English: Multisigning
- Current translation: (same as the English) Multisigning
- Approve:
- Correction:
- Reviewer:
- Date:

### 2.27 `no-freeze-permanently-gives-up-indiv.bc752856`

- Risk tier: Signing
- Page: Issuer control (/xrpl/builders/issuer-control.html)
- Heading on that page: Treat irreversible choices as irreversible
- Purpose: This sentence is about who is allowed to authorize a transaction.
- What the reader must understand: A signature authorizes the exact transaction the signer approved. A sign-in is not a payment, and the wrong signer, key, or quorum does not become valid because the interface looked finished. The English wording to preserve is: No Freeze permanently gives up individual and deep-freeze authority and the ability to clear a global freeze; it is not a general promise that no restriction can ever exist. Blackholing aims to remove usable signing authority. Neither label proves fair distribution, liquidity, backing or safe application code. Inspect actual account settings and every signing route rather than relying on a badge.
- English: No Freeze permanently gives up individual and deep-freeze authority and the ability to clear a global freeze; it is not a general promise that no restriction can ever exist. Blackholing aims to remove usable signing authority. Neither label proves fair distribution, liquidity, backing or safe application code. Inspect actual account settings and every signing route rather than relying on a badge.
- Current translation: No Freeze gibt dauerhaft die Befugnis für Individual Freeze und Deep Freeze auf sowie die Fähigkeit, einen Global Freeze aufzuheben; es ist kein allgemeines Versprechen, dass niemals eine Beschränkung existieren kann. Blackholing zielt darauf ab, nutzbare Signierbefugnis zu entfernen. Keines der beiden Etiketten beweist faire Verteilung, Liquidität, Deckung oder sicheren Anwendungscode. Prüfe die tatsächlichen Kontoeinstellungen und jeden Signierweg, statt dich auf ein Abzeichen zu verlassen.
- Approve:
- Correction:
- Reviewer:
- Date:

### 2.28 `official-permission-delegation-guida.680580b1`

- Risk tier: Signing
- Page: Issuer control (/xrpl/builders/issuer-control.html)
- Heading on that page: Check delegated permissions too
- Purpose: This sentence is about who is allowed to authorize a transaction.
- What the reader must understand: A signature authorizes the exact transaction the signer approved. A sign-in is not a payment, and the wrong signer, key, or quorum does not become valid because the interface looked finished. The English wording to preserve is: Official permission delegation guidance and current warnings
- English: Official permission delegation guidance and current warnings
- Current translation: Offizieller Leitfaden zur Berechtigungsdelegation und aktuelle Warnungen
- Approve:
- Correction:
- Reviewer:
- Date:

### 2.29 `on-a-read-only-explorer-select-the-i.cdb893fe`

- Risk tier: Signing
- Page: NFT basics (/xrpl/builders/nft-basics.html)
- Heading on that page: Optional: connect the worksheet to a public record
- Purpose: This sentence is about who is allowed to authorize a transaction.
- What the reader must understand: A signature authorizes the exact transaction the signer approved. A sign-in is not a payment, and the wrong signer, key, or quorum does not become valid because the interface looked finished. The English wording to preserve is: On a read-only explorer, select the intended network and search the full NFTokenID. Locate the current owner, issuer, taxon, flags and URI. Decode flags using the linked transaction reference if the explorer does not explain them. Record the observation time and ledger if available. Treat remote metadata links as untrusted content; do not sign a request to reveal a picture.
- English: On a read-only explorer, select the intended network and search the full NFTokenID. Locate the current owner, issuer, taxon, flags and URI. Decode flags using the linked transaction reference if the explorer does not explain them. Record the observation time and ledger if available. Treat remote metadata links as untrusted content; do not sign a request to reveal a picture.
- Current translation: Wähl in einem nur lesbaren Explorer das beabsichtigte Netzwerk und such die vollständige NFTokenID. Such den aktuellen Eigentümer, den Emittenten, das Taxon, die Flags und die URI. Decodiere Flags mit der verlinkten Transaktionsreferenz, wenn der Explorer sie nicht erklärt. Notiere den Beobachtungszeitpunkt und das Ledger, falls verfügbar. Behandle externe Metadatenlinks als nicht vertrauenswürdigen Inhalt; signiere keine Anfrage, um ein Bild anzuzeigen.
- Approve:
- Correction:
- Reviewer:
- Date:

### 2.30 `quorum.fdaafe2d`

- Risk tier: Signing
- Page: Issuer control (/xrpl/builders/issuer-control.html)
- Heading on that page: Words you will use
- Purpose: This sentence is about who is allowed to authorize a transaction.
- What the reader must understand: A signature authorizes the exact transaction the signer approved. A sign-in is not a payment, and the wrong signer, key, or quorum does not become valid because the interface looked finished. The English wording to preserve is: Quorum
- English: Quorum
- Current translation: (same as the English) Quorum
- Approve:
- Correction:
- Reviewer:
- Date:

### 2.31 `regular-key.26e205f4`

- Risk tier: Signing
- Page: Wallets (/xrpl/wallet-basics.html)
- Heading on that page: Regular Key
- Purpose: This sentence is about who is allowed to authorize a transaction.
- What the reader must understand: A signature authorizes the exact transaction the signer approved. A sign-in is not a payment, and the wrong signer, key, or quorum does not become valid because the interface looked finished. The English wording to preserve is: Regular Key
- English: Regular Key
- Current translation: (same as the English) Regular Key
- Approve:
- Correction:
- Reviewer:
- Date:

### 2.32 `regular-key.77459c09`

- Risk tier: Signing
- Page: Issuer control (/xrpl/builders/issuer-control.html)
- Heading on that page: Words you will use
- Purpose: This sentence is about who is allowed to authorize a transaction.
- What the reader must understand: A signature authorizes the exact transaction the signer approved. A sign-in is not a payment, and the wrong signer, key, or quorum does not become valid because the interface looked finished. The English wording to preserve is: Regular key
- English: Regular key
- Current translation: Regular Key
- Approve:
- Correction:
- Reviewer:
- Date:

### 2.33 `regular-keys-and-multisigning.5d237b3f`

- Risk tier: Signing
- Page: Wallets (/xrpl/wallet-basics.html)
- Heading on that page: Regular keys and multisigning
- Purpose: This sentence is about who is allowed to authorize a transaction.
- What the reader must understand: A signature authorizes the exact transaction the signer approved. A sign-in is not a payment, and the wrong signer, key, or quorum does not become valid because the interface looked finished. The English wording to preserve is: Regular keys and multisigning
- English: Regular keys and multisigning
- Current translation: Regular Keys und Multisigning
- Approve:
- Correction:
- Reviewer:
- Date:

### 2.34 `regular-keys.33fe0531`

- Risk tier: Signing
- Page: Builders hub (/xrpl/builders/)
- Heading on that page: Regular Keys
- Purpose: This sentence is about who is allowed to authorize a transaction.
- What the reader must understand: A signature authorizes the exact transaction the signer approved. A sign-in is not a payment, and the wrong signer, key, or quorum does not become valid because the interface looked finished. The English wording to preserve is: Regular Keys
- English: Regular Keys
- Current translation: (same as the English) Regular Keys
- Approve:
- Correction:
- Reviewer:
- Date:

### 2.35 `review-regular-key-and-signer-list-s.f0f0de49`

- Risk tier: Signing
- Page: Safety (/xrpl/safety.html)
- Heading on that page: Protect signing authority
- Purpose: This sentence is about who is allowed to authorize a transaction.
- What the reader must understand: A signature authorizes the exact transaction the signer approved. A sign-in is not a payment, and the wrong signer, key, or quorum does not become valid because the interface looked finished. The English wording to preserve is: Review regular-key and signer-list settings.
- English: Review regular-key and signer-list settings.
- Current translation: Prüfe die Einstellungen von Regular Key und Signer List.
- Approve:
- Correction:
- Reviewer:
- Date:

### 2.36 `rotate-regular-keys-or-signer-lists.e8c00579`

- Risk tier: Signing
- Page: Safety (/xrpl/safety.html)
- Heading on that page: What to do after compromise
- Purpose: This sentence is about who is allowed to authorize a transaction.
- What the reader must understand: A signature authorizes the exact transaction the signer approved. A sign-in is not a payment, and the wrong signer, key, or quorum does not become valid because the interface looked finished. The English wording to preserve is: Rotate regular keys or signer lists when appropriate.
- English: Rotate regular keys or signer lists when appropriate.
- Current translation: Tausch Regular Keys oder Signer Lists, wenn es passt.
- Approve:
- Correction:
- Reviewer:
- Date:

### 2.37 `save-the-authority-map-and-plain-eng.f68c90c5`

- Risk tier: Signing
- Page: Issuer control (/xrpl/builders/issuer-control.html)
- Heading on that page: What to keep before moving on
- Purpose: This sentence is about who is allowed to authorize a transaction.
- What the reader must understand: A signature authorizes the exact transaction the signer approved. A sign-in is not a payment, and the wrong signer, key, or quorum does not become valid because the interface looked finished. The English wording to preserve is: Save the authority map and plain-English control disclosure. Have another person explain how the regular key changes the two-of-three example. If they cannot, improve the explanation before proceeding to the signing-flow lesson.
- English: Save the authority map and plain-English control disclosure. Have another person explain how the regular key changes the two-of-three example. If they cannot, improve the explanation before proceeding to the signing-flow lesson.
- Current translation: Speichere die Befugniskarte und die Kontrolloffenlegung in einfacher Sprache. Lass eine andere Person erklären, wie der Regular Key das Beispiel zwei von drei verändert. Wenn sie das nicht kann, verbessere die Erklärung, bevor du zur Lektion über den Signierablauf gehst.
- Approve:
- Correction:
- Reviewer:
- Date:

### 2.38 `separate-freeze-authorization-clawba.254e71c0`

- Risk tier: Signing
- Page: Issuer control (/xrpl/builders/issuer-control.html)
- Heading on that page: Work through this example
- Purpose: This sentence is about who is allowed to authorize a transaction.
- What the reader must understand: A signature authorizes the exact transaction the signer approved. A sign-in is not a payment, and the wrong signer, key, or quorum does not become valid because the interface looked finished. The English wording to preserve is: Separate freeze, authorization, clawback and signing authority in your disclosure.
- English: Separate freeze, authorization, clawback and signing authority in your disclosure.
- Current translation: Trenn Freeze, Autorisierung, Clawback und Signierbefugnis in deiner Offenlegung.
- Approve:
- Correction:
- Reviewer:
- Date:

### 2.39 `signer-list.166a4390`

- Risk tier: Signing
- Page: Wallets (/xrpl/wallet-basics.html)
- Heading on that page: Signer List
- Purpose: This sentence is about who is allowed to authorize a transaction.
- What the reader must understand: A signature authorizes the exact transaction the signer approved. A sign-in is not a payment, and the wrong signer, key, or quorum does not become valid because the interface looked finished. The English wording to preserve is: Signer List
- English: Signer List
- Current translation: (same as the English) Signer List
- Approve:
- Correction:
- Reviewer:
- Date:

### 2.40 `the-minimum-combined-signer-weight-n.8c1f333f`

- Risk tier: Signing
- Page: Issuer control (/xrpl/builders/issuer-control.html)
- Heading on that page: Words you will use
- Purpose: This sentence is about who is allowed to authorize a transaction.
- What the reader must understand: A signature authorizes the exact transaction the signer approved. A sign-in is not a payment, and the wrong signer, key, or quorum does not become valid because the interface looked finished. The English wording to preserve is: The minimum combined signer weight needed for a multi-signed transaction.
- English: The minimum combined signer weight needed for a multi-signed transaction.
- Current translation: Das mindestens nötige kombinierte Signer-Gewicht für eine mehrfach signierte Transaktion.
- Approve:
- Correction:
- Reviewer:
- Date:

### 2.41 `the-website-says-nobody-can-alter-th.18cab641`

- Risk tier: Signing
- Page: Issuer control (/xrpl/builders/issuer-control.html)
- Heading on that page: Map who can act for the club
- Purpose: This sentence is about who is allowed to authorize a transaction.
- What the reader must understand: A signature authorizes the exact transaction the signer approved. A sign-in is not a payment, and the wrong signer, key, or quorum does not become valid because the interface looked finished. The English wording to preserve is: The website says nobody can alter the asset because master signing is disabled. Your map shows a regular key. Replace the claim with an accurate statement of the enabled routes and remaining capabilities. You do not have enough evidence to claim nobody knows a key, or to certify the team storage practices.
- English: The website says nobody can alter the asset because master signing is disabled. Your map shows a regular key. Replace the claim with an accurate statement of the enabled routes and remaining capabilities. You do not have enough evidence to claim nobody knows a key, or to certify the team storage practices.
- Current translation: Die Website sagt, niemand könne das Asset ändern, weil Master-Signieren deaktiviert ist. Deine Karte zeigt einen Regular Key. Ersetze die Behauptung durch eine genaue Aussage über die aktivierten Wege und die verbleibenden Fähigkeiten. Du hast nicht genug Nachweise, um zu behaupten, niemand kenne einen Schlüssel, oder um die Aufbewahrungspraxis des Teams zu bescheinigen.
- Approve:
- Correction:
- Reviewer:
- Date:

### 2.42 `this-is-an-inspection-exercise-not-a.3723d0c3`

- Risk tier: Signing
- Page: Issuer control (/xrpl/builders/issuer-control.html)
- Heading on that page: Work through this example
- Purpose: This sentence is about who is allowed to authorize a transaction.
- What the reader must understand: A signature authorizes the exact transaction the signer approved. A sign-in is not a payment, and the wrong signer, key, or quorum does not become valid because the interface looked finished. The English wording to preserve is: This is an inspection exercise, not a blackholing recipe. Do not disable keys, set irreversible flags or remove signers while following this lesson.
- English: This is an inspection exercise, not a blackholing recipe. Do not disable keys, set irreversible flags or remove signers while following this lesson.
- Current translation: Das ist eine Prüfübung, kein Blackholing-Rezept. Deaktiviere keine Schlüssel, setze keine unumkehrbaren Flags und entferne keine Signer, während du dieser Lektion folgst.
- Approve:
- Correction:
- Reviewer:
- Date:

### 2.43 `two-of-three-signers-exist-alongside.90b1f87d`

- Risk tier: Signing
- Page: Issuer control (/xrpl/builders/issuer-control.html)
- Heading on that page: Two-of-three signers exist alongside an enabled regular key. Is every action forced through two people?
- Purpose: This sentence is about who is allowed to authorize a transaction.
- What the reader must understand: A signature authorizes the exact transaction the signer approved. A sign-in is not a payment, and the wrong signer, key, or quorum does not become valid because the interface looked finished. The English wording to preserve is: Two-of-three signers exist alongside an enabled regular key. Is every action forced through two people?
- English: Two-of-three signers exist alongside an enabled regular key. Is every action forced through two people?
- Current translation: Neben einer Signierkonfiguration, die zwei von drei Signaturen erfordert, besteht ein aktivierter Regular Key. Müssen deshalb wirklich alle Aktionen von zwei Personen autorisiert werden?
- Approve:
- Correction:
- Reviewer:
- Date:

### 2.44 `use-the-exact-asset-identity-from-le.4fd4d9d1`

- Risk tier: Signing
- Page: Trust lines lesson (/xrpl/builders/trust-lines.html)
- Heading on that page: Before you start
- Purpose: This sentence is about who is allowed to authorize a transaction.
- What the reader must understand: A signature authorizes the exact transaction the signer approved. A sign-in is not a payment, and the wrong signer, key, or quorum does not become valid because the interface looked finished. The English wording to preserve is: Use the exact asset identity from lesson 1. A trust line belongs to the classic fungible-token model; this is not an NFT purchase or native XRP setup. No signing is needed for this worksheet.
- English: Use the exact asset identity from lesson 1. A trust line belongs to the classic fungible-token model; this is not an NFT purchase or native XRP setup. No signing is needed for this worksheet.
- Current translation: Nutze die genaue Asset-Identität aus Lektion 1. Eine Trust Line gehört zum klassischen Modell fungibler Token; das ist kein NFT-Kauf und kein Aufbau für natives XRP. Für dieses Arbeitsblatt ist kein Signieren nötig.
- Approve:
- Correction:
- Reviewer:
- Date:

### 2.45 `where-the-network-supports-permissio.1ed55fc2`

- Risk tier: Signing
- Page: Issuer control (/xrpl/builders/issuer-control.html)
- Heading on that page: Check delegated permissions too
- Purpose: This sentence is about who is allowed to authorize a transaction.
- What the reader must understand: A signature authorizes the exact transaction the signer approved. A sign-in is not a payment, and the wrong signer, key, or quorum does not become valid because the interface looked finished. The English wording to preserve is: Where the network supports permission delegation, an account can authorize another account to perform specified actions. A delegate is not the same as a regular key or a signer on the owner account. Include existing delegation records and their exact permissions in a real authority review; a map containing only three key routes may be incomplete. Check current amendment support and the official permission-specific warnings before using this feature. This course does not configure delegation.
- English: Where the network supports permission delegation, an account can authorize another account to perform specified actions. A delegate is not the same as a regular key or a signer on the owner account. Include existing delegation records and their exact permissions in a real authority review; a map containing only three key routes may be incomplete. Check current amendment support and the official permission-specific warnings before using this feature. This course does not configure delegation.
- Current translation: Wo das Netzwerk die Delegation von Berechtigungen unterstützt, kann ein Konto ein anderes Konto autorisieren, festgelegte Aktionen auszuführen. Ein Delegate ist nicht dasselbe wie ein Regular Key oder ein Signer auf dem Eigentümerkonto. Nimm bestehende Delegationsdatensätze und ihre genauen Berechtigungen in eine echte Befugnisprüfung auf; eine Karte mit nur drei Schlüsselwegen kann unvollständig sein. Prüfe die aktuelle Amendment-Unterstützung und die offiziellen Warnungen zu den einzelnen Berechtigungen, bevor du diese Funktion nutzt. Dieser Kurs richtet keine Delegation ein.
- Approve:
- Correction:
- Reviewer:
- Date:

### 2.46 `write-a-user-disclosure-with-three-c.e47148cd`

- Risk tier: Signing
- Page: Issuer control (/xrpl/builders/issuer-control.html)
- Heading on that page: Map who can act for the club
- Purpose: This sentence is about who is allowed to authorize a transaction.
- What the reader must understand: A signature authorizes the exact transaction the signer approved. A sign-in is not a payment, and the wrong signer, key, or quorum does not become valid because the interface looked finished. The English wording to preserve is: Write a user disclosure with three columns: capability, present evidence and operating policy. Example: regular key present / observed account field / club says two staff approve its use. Label the last column as policy, not a protocol guarantee.
- English: Write a user disclosure with three columns: capability, present evidence and operating policy. Example: regular key present / observed account field / club says two staff approve its use. Label the last column as policy, not a protocol guarantee.
- Current translation: Schreib eine Nutzeroffenlegung mit drei Spalten: Fähigkeit, vorhandener Nachweis und Betriebsrichtlinie. Beispiel: Regular Key vorhanden / beobachtetes Kontofeld / der Club sagt, zwei Mitarbeitende genehmigen seine Nutzung. Kennzeichne die letzte Spalte als Richtlinie, nicht als Protokollgarantie.
- Approve:
- Correction:
- Reviewer:
- Date:

### 2.47 `xrpl-lets-accounts-separate-everyday.ce4f8952`

- Risk tier: Signing
- Page: Wallets (/xrpl/wallet-basics.html)
- Heading on that page: Regular keys and multisigning
- Purpose: This sentence is about who is allowed to authorize a transaction.
- What the reader must understand: A signature authorizes the exact transaction the signer approved. A sign-in is not a payment, and the wrong signer, key, or quorum does not become valid because the interface looked finished. The English wording to preserve is: XRPL lets accounts separate everyday signing from the master key and require multiple signers.
- English: XRPL lets accounts separate everyday signing from the master key and require multiple signers.
- Current translation: XRPL lässt Konten das alltägliche Signieren vom Master Key trennen und mehrere Signer verlangen.
- Approve:
- Correction:
- Reviewer:
- Date:

### 2.48 `yes-the-signer-list-overrides-every.25ea3015`

- Risk tier: Signing
- Page: Issuer control (/xrpl/builders/issuer-control.html)
- Heading on that page: Two-of-three signers exist alongside an enabled regular key. Is every action forced through two people?
- Purpose: This sentence is about who is allowed to authorize a transaction.
- What the reader must understand: A signature authorizes the exact transaction the signer approved. A sign-in is not a payment, and the wrong signer, key, or quorum does not become valid because the interface looked finished. The English wording to preserve is: Yes; the signer list overrides every other key
- English: Yes; the signer list overrides every other key
- Current translation: Ja; die Signer List setzt jeden anderen Schlüssel außer Kraft
- Approve:
- Correction:
- Reviewer:
- Date:

## 3. Destination tags

This sentence is about the extra number some receiving accounts require so a payment is credited to the right person.

What the reader must understand for this whole section: Some destinations require a destination tag. Omitting it, or inventing one, can send the payment to the wrong place. The tag is not a memo and not a seed.

### 3.1 `destination-tag.d07f561a`

- Risk tier: Destination tags
- Page: Wallets; Usage (/xrpl/wallet-basics.html; /xrpl/usage.html)
- Heading on that page: Destination Tag; Destination Tag
- Purpose: This sentence is about the extra number some receiving accounts require so a payment is credited to the right person.
- What the reader must understand: Some destinations require a destination tag. Omitting it, or inventing one, can send the payment to the wrong place. The tag is not a memo and not a seed. The English wording to preserve is: Destination Tag
- English: Destination Tag
- Current translation: (same as the English) Destination Tag
- Approve:
- Correction:
- Reviewer:
- Date:

### 3.2 `destination-tags-and-memos.2178c264`

- Risk tier: Destination tags
- Page: Usage (/xrpl/usage.html)
- Heading on that page: Destination tags and memos
- Purpose: This sentence is about the extra number some receiving accounts require so a payment is credited to the right person.
- What the reader must understand: Some destinations require a destination tag. Omitting it, or inventing one, can send the payment to the wrong place. The tag is not a memo and not a seed. The English wording to preserve is: Destination tags and memos
- English: Destination tags and memos
- Current translation: Destination Tags und Memos
- Approve:
- Correction:
- Reviewer:
- Date:

### 3.3 `for-payments-compare-recipient-asset.6a526a68`

- Risk tier: Destination tags
- Page: Xaman flows (/xrpl/builders/xaman-flows.html)
- Heading on that page: Confirm payment facts
- Purpose: This sentence is about the extra number some receiving accounts require so a payment is credited to the right person.
- What the reader must understand: Some destinations require a destination tag. Omitting it, or inventing one, can send the payment to the wrong place. The tag is not a memo and not a seed. The English wording to preserve is: For payments, compare recipient, asset identity, delivered amount and any required destination tag/reference with the stored intent. Partial payments make the requested amount unsafe as a receipt: inspect delivered_amount in metadata. Record a transaction once so a repeat callback cannot grant a second entitlement. Unknown or unavailable ledger evidence stays pending.
- English: For payments, compare recipient, asset identity, delivered amount and any required destination tag/reference with the stored intent. Partial payments make the requested amount unsafe as a receipt: inspect delivered_amount in metadata. Record a transaction once so a repeat callback cannot grant a second entitlement. Unknown or unavailable ledger evidence stays pending.
- Current translation: Vergleiche bei Zahlungen Empfänger, Asset-Identität, gelieferten Betrag und jedes nötige Destination Tag oder jede Referenz mit der gespeicherten Absicht. Teilzahlungen machen den angeforderten Betrag als Beleg unsicher: prüfe delivered_amount in den Metadaten. Zeichne eine Transaktion einmal auf, damit ein wiederholter Callback nicht eine zweite Berechtigung gewährt. Unbekannte oder nicht verfügbare Ledger-Nachweise bleiben ausstehend.
- Approve:
- Correction:
- Reviewer:
- Date:

### 3.4 `learn-payments-destination-tags-trus.fce7b359`

- Risk tier: Destination tags
- Page: Definitions (/xrpl/definitions.html)
- Heading on that page: Keep moving
- Purpose: This sentence is about the extra number some receiving accounts require so a payment is credited to the right person.
- What the reader must understand: Some destinations require a destination tag. Omitting it, or inventing one, can send the payment to the wrong place. The tag is not a memo and not a seed. The English wording to preserve is: Learn payments, destination tags, trustlines, token trades, NFTs, offers, and execution.
- English: Learn payments, destination tags, trustlines, token trades, NFTs, offers, and execution.
- Current translation: Lern Zahlungen, Destination Tags, Trustlines, Token-Handel, NFTs, Offers und Ausführung.
- Approve:
- Correction:
- Reviewer:
- Date:

### 3.5 `what-does-a-destination-tag-do.850bd82c`

- Risk tier: Destination tags
- Page: Usage (/xrpl/usage.html)
- Heading on that page: What does a destination tag do?
- Purpose: This sentence is about the extra number some receiving accounts require so a payment is credited to the right person.
- What the reader must understand: Some destinations require a destination tag. Omitting it, or inventing one, can send the payment to the wrong place. The tag is not a memo and not a seed. The English wording to preserve is: What does a destination tag do?
- English: What does a destination tag do?
- Current translation: Was tut ein Destination Tag?
- Approve:
- Correction:
- Reviewer:
- Date:

## 4. Trust lines

This sentence is about the opt-in that lets an account hold an issued token.

What the reader must understand for this whole section: A trust line creates the holding relationship for an issued token. It is not an endorsement, not proof the token is safe, and not a promise the issuer will redeem it.

### 4.1 `2-which-asset-doesn-t-need-a-trustli.9a866002`

- Risk tier: Trust lines
- Page: Definitions (/xrpl/definitions.html)
- Heading on that page: 2. Which asset doesn’t need a trustline?
- Purpose: This sentence is about the opt-in that lets an account hold an issued token.
- What the reader must understand: A trust line creates the holding relationship for an issued token. It is not an endorsement, not proof the token is safe, and not a promise the issuer will redeem it. The English wording to preserve is: 2. Which asset doesn’t need a trustline?
- English: 2. Which asset doesn’t need a trustline?
- Current translation: 2. Welches Asset braucht keine Trustline?
- Approve:
- Correction:
- Reviewer:
- Date:

### 4.2 `a-promotional-page-asks-you-to-add-a.9a219adb`

- Risk tier: Trust lines
- Page: Trust lines lesson (/xrpl/builders/trust-lines.html)
- Heading on that page: Work through this example
- Purpose: This sentence is about the opt-in that lets an account hold an issued token.
- What the reader must understand: A trust line creates the holding relationship for an issued token. It is not an endorsement, not proof the token is safe, and not a promise the issuer will redeem it. The English wording to preserve is: A promotional page asks you to add an unlimited trust line to a token with a familiar ticker. You only wanted to inspect the project. What should you do next?
- English: A promotional page asks you to add an unlimited trust line to a token with a familiar ticker. You only wanted to inspect the project. What should you do next?
- Current translation: Eine Werbe-Seite fordert dich auf, eine unbegrenzte Trust Line zu einem Token mit vertrautem Ticker hinzuzufügen. Du wolltest das Projekt nur ansehen. Was solltest du als Nächstes tun?
- Approve:
- Correction:
- Reviewer:
- Date:

### 4.3 `a-trust-line-records-a-relationship.41fdf4ce`

- Risk tier: Trust lines
- Page: Builders hub (/xrpl/builders/)
- Heading on that page: Disclosure
- Purpose: This sentence is about the opt-in that lets an account hold an issued token.
- What the reader must understand: A trust line creates the holding relationship for an issued token. It is not an endorsement, not proof the token is safe, and not a promise the issuer will redeem it. The English wording to preserve is: A trust line records a relationship between accounts for one currency. “Trust” here does not mean the issuer has been approved as safe.
- English: A trust line records a relationship between accounts for one currency. “Trust” here does not mean the issuer has been approved as safe.
- Current translation: Eine Trust Line zeichnet eine Beziehung zwischen Konten für eine Währung auf. „Trust“ bedeutet hier nicht, dass der Emittent als sicher freigegeben wurde.
- Approve:
- Correction:
- Reviewer:
- Date:

### 4.4 `a-trustline-is-an-on-ledger-relation.5f24b5a6`

- Risk tier: Trust lines
- Page: Definitions (/xrpl/definitions.html)
- Heading on that page: What’s a trustline?
- Purpose: This sentence is about the opt-in that lets an account hold an issued token.
- What the reader must understand: A trust line creates the holding relationship for an issued token. It is not an endorsement, not proof the token is safe, and not a promise the issuer will redeem it. The English wording to preserve is: A trustline is an on-ledger relationship between two accounts for one specific currency code.
- English: A trustline is an on-ledger relationship between two accounts for one specific currency code.
- Current translation: Eine Trustline ist eine On-Ledger-Beziehung zwischen zwei Konten für einen bestimmten Währungscode.
- Approve:
- Correction:
- Reviewer:
- Date:

### 4.5 `a-trustline-proves-a-token-is-safe-i.70f360f9`

- Risk tier: Trust lines
- Page: Definitions (/xrpl/definitions.html)
- Heading on that page: What people keep mixing up
- Purpose: This sentence is about the opt-in that lets an account hold an issued token.
- What the reader must understand: A trust line creates the holding relationship for an issued token. It is not an endorsement, not proof the token is safe, and not a promise the issuer will redeem it. The English wording to preserve is: {s1} A trustline proves a token is safe.{br2}{s3} It only creates the account relationship needed to hold it.
- English: {s1} A trustline proves a token is safe.{br2}{s3} It only creates the account relationship needed to hold it.
- Current translation: {s1} Eine Trustline beweist, dass ein Token sicher ist.{br2}{s3} Sie stellt nur die Kontobeziehung her, die nötig ist, um ihn zu halten.
- Approve:
- Correction:
- Reviewer:
- Date:

### 4.6 `a-trustline-tells-xrpl-that-your-acc.0ac7c82b`

- Risk tier: Trust lines
- Page: Definitions (/xrpl/definitions.html)
- Heading on that page: What’s a trustline?
- Purpose: This sentence is about the opt-in that lets an account hold an issued token.
- What the reader must understand: A trust line creates the holding relationship for an issued token. It is not an endorsement, not proof the token is safe, and not a promise the issuer will redeem it. The English wording to preserve is: A trustline tells XRPL that your account is willing to hold an issued asset connected to a specific issuer. It can include a limit and other settings. $XRP doesn’t use trustlines because it’s native to the ledger.
- English: A trustline tells XRPL that your account is willing to hold an issued asset connected to a specific issuer. It can include a limit and other settings. $XRP doesn’t use trustlines because it’s native to the ledger.
- Current translation: Eine Trustline sagt XRPL, dass dein Konto bereit ist, ein emittiertes Asset zu halten, das mit einem bestimmten Emittenten verbunden ist. Sie kann ein Limit und weitere Einstellungen enthalten. $XRP nutzt keine Trustlines, weil es nativ zum Ledger gehört.
- Approve:
- Correction:
- Reviewer:
- Date:

### 4.7 `activate-the-trustline-and-watch-the.bfd64ab7`

- Risk tier: Trust lines
- Page: Definitions (/xrpl/definitions.html)
- Heading on that page: Trustline visualizer
- Purpose: This sentence is about the opt-in that lets an account hold an issued token.
- What the reader must understand: A trust line creates the holding relationship for an issued token. It is not an endorsement, not proof the token is safe, and not a promise the issuer will redeem it. The English wording to preserve is: Activate the trustline and watch the relationship form.
- English: Activate the trustline and watch the relationship form.
- Current translation: Aktiviere die Trustline und beobachte, wie die Beziehung entsteht.
- Approve:
- Correction:
- Reviewer:
- Date:

### 4.8 `create-trustline.c92ac803`

- Risk tier: Trust lines
- Page: Usage (/xrpl/usage.html)
- Heading on that page: Receiving issued assets
- Purpose: This sentence is about the opt-in that lets an account hold an issued token.
- What the reader must understand: A trust line creates the holding relationship for an issued token. It is not an endorsement, not proof the token is safe, and not a promise the issuer will redeem it. The English wording to preserve is: Create trustline
- English: Create trustline
- Current translation: Trustline erstellen
- Approve:
- Correction:
- Reviewer:
- Date:

### 4.9 `creating-a-trustline-is-permission-t.6a7a834b`

- Risk tier: Trust lines
- Page: Definitions (/xrpl/definitions.html)
- Heading on that page: What a trustline doesn’t mean
- Purpose: This sentence is about the opt-in that lets an account hold an issued token.
- What the reader must understand: A trust line creates the holding relationship for an issued token. It is not an endorsement, not proof the token is safe, and not a promise the issuer will redeem it. The English wording to preserve is: Creating a trustline is permission to hold an asset. It isn’t an endorsement, investment guarantee, or security review.
- English: Creating a trustline is permission to hold an asset. It isn’t an endorsement, investment guarantee, or security review.
- Current translation: Eine Trustline zu erstellen ist die Erlaubnis, ein Asset zu halten. Sie ist keine Empfehlung, keine Anlagegarantie und keine Sicherheitsprüfung.
- Approve:
- Correction:
- Reviewer:
- Date:

### 4.10 `currency-code-issuer-supply-trustlin.090f0f84`

- Risk tier: Trust lines
- Page: Builders hub (/xrpl/builders/)
- Heading on that page: Issued Assets
- Purpose: This sentence is about the opt-in that lets an account hold an issued token.
- What the reader must understand: A trust line creates the holding relationship for an issued token. It is not an endorsement, not proof the token is safe, and not a promise the issuer will redeem it. The English wording to preserve is: Currency code, issuer, supply, trustlines, and controls.
- English: Currency code, issuer, supply, trustlines, and controls.
- Current translation: Währungscode, Emittent, Supply, Trustlines und Kontrollen.
- Approve:
- Correction:
- Reviewer:
- Date:

### 4.11 `definitions.trust.active`

- Risk tier: Trust lines
- Page: Shared chrome or meta text
- Purpose: This sentence is about the opt-in that lets an account hold an issued token.
- What the reader must understand: A trust line creates the holding relationship for an issued token. It is not an endorsement, not proof the token is safe, and not a promise the issuer will redeem it. The English wording to preserve is: Trustline active. This wallet can now hold this issuer’s TOKEN asset, subject to its limit and settings.
- English: Trustline active. This wallet can now hold this issuer’s TOKEN asset, subject to its limit and settings.
- Current translation: Trustline aktiv. Diese Wallet kann das TOKEN-Asset dieses Emittenten jetzt halten, im Rahmen von Limit und Einstellungen.
- Approve:
- Correction:
- Reviewer:
- Date:

### 4.12 `definitions.trust.create`

- Risk tier: Trust lines
- Page: Definitions (/xrpl/definitions.html)
- Heading on that page: Trustline visualizer
- Purpose: This sentence is about the opt-in that lets an account hold an issued token.
- What the reader must understand: A trust line creates the holding relationship for an issued token. It is not an endorsement, not proof the token is safe, and not a promise the issuer will redeem it. The English wording to preserve is: Create Trustline
- English: Create Trustline
- Current translation: Trustline erstellen
- Approve:
- Correction:
- Reviewer:
- Date:

### 4.13 `definitions.trust.inactive`

- Risk tier: Trust lines
- Page: Shared chrome or meta text
- Purpose: This sentence is about the opt-in that lets an account hold an issued token.
- What the reader must understand: A trust line creates the holding relationship for an issued token. It is not an endorsement, not proof the token is safe, and not a promise the issuer will redeem it. The English wording to preserve is: No trustline exists. This wallet can’t hold this issuer’s TOKEN asset.
- English: No trustline exists. This wallet can’t hold this issuer’s TOKEN asset.
- Current translation: Es besteht keine Trustline. Diese Wallet kann das TOKEN-Asset dieses Emittenten nicht halten.
- Approve:
- Correction:
- Reviewer:
- Date:

### 4.14 `definitions.trust.remove`

- Risk tier: Trust lines
- Page: Shared chrome or meta text
- Purpose: This sentence is about the opt-in that lets an account hold an issued token.
- What the reader must understand: A trust line creates the holding relationship for an issued token. It is not an endorsement, not proof the token is safe, and not a promise the issuer will redeem it. The English wording to preserve is: Remove Trustline
- English: Remove Trustline
- Current translation: Trustline entfernen
- Approve:
- Correction:
- Reviewer:
- Date:

### 4.15 `do-you-need-a-trust-line-to-receive.e5034039`

- Risk tier: Trust lines
- Page: Trust lines lesson (/xrpl/builders/trust-lines.html)
- Heading on that page: Do you need a trust line to receive native XRP?
- Purpose: This sentence is about the opt-in that lets an account hold an issued token.
- What the reader must understand: A trust line creates the holding relationship for an issued token. It is not an endorsement, not proof the token is safe, and not a promise the issuer will redeem it. The English wording to preserve is: Do you need a trust line to receive native XRP?
- English: Do you need a trust line to receive native XRP?
- Current translation: Brauchst du eine Trust Line, um natives XRP zu empfangen?
- Approve:
- Correction:
- Reviewer:
- Date:

### 4.16 `does-a-trustline-prove-safety.e60fa2c6`

- Risk tier: Trust lines
- Page: Usage (/xrpl/usage.html)
- Heading on that page: Does a trustline prove safety?
- Purpose: This sentence is about the opt-in that lets an account hold an issued token.
- What the reader must understand: A trust line creates the holding relationship for an issued token. It is not an endorsement, not proof the token is safe, and not a promise the issuer will redeem it. The English wording to preserve is: Does a trustline prove safety?
- English: Does a trustline prove safety?
- Current translation: Beweist eine Trustline Sicherheit?
- Approve:
- Correction:
- Reviewer:
- Date:

### 4.17 `explain-why-xrp-needs-no-trust-line.ce59177b`

- Risk tier: Trust lines
- Page: Trust lines lesson (/xrpl/builders/trust-lines.html)
- Heading on that page: Work through this example
- Purpose: This sentence is about the opt-in that lets an account hold an issued token.
- What the reader must understand: A trust line creates the holding relationship for an issued token. It is not an endorsement, not proof the token is safe, and not a promise the issuer will redeem it. The English wording to preserve is: Explain why XRP needs no trust line and why a ticker alone is insufficient.
- English: Explain why XRP needs no trust line and why a ticker alone is insufficient.
- Current translation: Erkläre, warum XRP keine Trust Line braucht und warum ein Ticker allein nicht reicht.
- Approve:
- Correction:
- Reviewer:
- Date:

### 4.18 `first-check-the-network-and-exact-as.aadd4c6c`

- Risk tier: Trust lines
- Page: Create a token (/xrpl/builders/create-token.html)
- Heading on that page: The token does not appear in a wallet
- Purpose: This sentence is about the opt-in that lets an account hold an issued token.
- What the reader must understand: A trust line creates the holding relationship for an issued token. It is not an endorsement, not proof the token is safe, and not a promise the issuer will redeem it. The English wording to preserve is: First check the network and exact asset identity. Display support and ledger existence are different. Do not create repeated trust lines or send money to make a logo appear.
- English: First check the network and exact asset identity. Display support and ledger existence are different. Do not create repeated trust lines or send money to make a logo appear.
- Current translation: Prüfe zuerst das Netzwerk und die genaue Asset-Identität. Ob eine Oberfläche das Asset anzeigen kann und ob es im Ledger existiert, sind zwei verschiedene Dinge. Erstelle nicht wiederholt Trust Lines und sende kein Geld, damit ein Logo erscheint.
- Approve:
- Correction:
- Reviewer:
- Date:

### 4.19 `in-this-model-a-holder-establishes-a.1894c32f`

- Risk tier: Trust lines
- Page: Create a token (/xrpl/builders/create-token.html)
- Heading on that page: Understand the lifecycle
- Purpose: This sentence is about the opt-in that lets an account hold an issued token.
- What the reader must understand: A trust line creates the holding relationship for an issued token. It is not an endorsement, not proof the token is safe, and not a promise the issuer will redeem it. The English wording to preserve is: In this model, a holder establishes a trust line and the issuer sends issued currency to that holder. A trust line alone does not distribute tokens. Returning a balance to its issuer reduces the amount outstanding. A trust limit is not a project-wide supply cap, and a supply promise on a website is not ledger enforcement. Explain issuance, redemption and remaining authority before promoting the asset.
- English: In this model, a holder establishes a trust line and the issuer sends issued currency to that holder. A trust line alone does not distribute tokens. Returning a balance to its issuer reduces the amount outstanding. A trust limit is not a project-wide supply cap, and a supply promise on a website is not ledger enforcement. Explain issuance, redemption and remaining authority before promoting the asset.
- Current translation: In diesem Modell richtet ein Inhaber eine Trust Line ein, und der Emittent sendet emittierte Währung an diesen Inhaber. Eine Trust Line allein verteilt keine Token. Einen Saldo an den Emittenten zurückzugeben verringert die umlaufende Menge. Ein Trust-Limit ist keine projektweite Supply-Obergrenze, und ein Supply-Versprechen auf einer Website ist keine Durchsetzung im Ledger. Erkläre Ausgabe, Einlösung und verbleibende Befugnis, bevor du für das Asset wirbst.
- Approve:
- Correction:
- Reviewer:
- Date:

### 4.20 `issuer-authorization-controls-who-ma.0238879b`

- Risk tier: Trust lines
- Page: Issuer control (/xrpl/builders/issuer-control.html)
- Heading on that page: Distinguish the controls
- Purpose: This sentence is about the opt-in that lets an account hold an issued token.
- What the reader must understand: A trust line creates the holding relationship for an issued token. It is not an endorsement, not proof the token is safe, and not a promise the issuer will redeem it. The English wording to preserve is: Issuer authorization controls who may hold a currency when required. Individual freeze restricts spending through a trust line; deep freeze adds receiving restrictions, with issuer-direct exceptions. Global freeze has broader effects. These token controls do not freeze native XRP. Clawback is a separate capability and should be disclosed separately; it is not another name for freeze.
- English: Issuer authorization controls who may hold a currency when required. Individual freeze restricts spending through a trust line; deep freeze adds receiving restrictions, with issuer-direct exceptions. Global freeze has broader effects. These token controls do not freeze native XRP. Clawback is a separate capability and should be disclosed separately; it is not another name for freeze.
- Current translation: Die Emittenten-Autorisierung steuert, wer eine Währung halten darf, wenn das verlangt wird. Individual Freeze beschränkt das Ausgeben über eine Trust Line; Deep Freeze ergänzt Empfangsbeschränkungen, mit Ausnahmen für direkte Vorgänge mit dem Emittenten. Global Freeze hat breitere Wirkungen. Diese Token-Kontrollen frieren natives XRP nicht ein. Clawback ist eine separate Fähigkeit und sollte getrennt offengelegt werden; es ist kein anderer Name für Freeze.
- Approve:
- Correction:
- Reviewer:
- Date:

### 4.21 `meta.definitions.description`

- Risk tier: Trust lines
- Page: Shared chrome or meta text
- Purpose: This sentence is about the opt-in that lets an account hold an issued token.
- What the reader must understand: A trust line creates the holding relationship for an issued token. It is not an endorsement, not proof the token is safe, and not a promise the issuer will redeem it. The English wording to preserve is: Understand the XRP Ledger, wallets, accounts, issuers, trustlines, reserves, tokens, transactions, the DEX, AMMs, NFTs, and how they all connect.
- English: Understand the XRP Ledger, wallets, accounts, issuers, trustlines, reserves, tokens, transactions, the DEX, AMMs, NFTs, and how they all connect.
- Current translation: Verstehe das XRP Ledger, Wallets, Konten, Emittenten, Trustlines, Reserven, Token, Transaktionen, den DEX, AMMs, NFTs und wie das alles zusammenhängt.
- Approve:
- Correction:
- Reviewer:
- Date:

### 4.22 `meta.trust-lines.description`

- Risk tier: Trust lines
- Page: Trust lines lesson (/xrpl/builders/trust-lines.html)
- Heading on that page: Set a boundary for an issued asset
- Purpose: This sentence is about the opt-in that lets an account hold an issued token.
- What the reader must understand: A trust line creates the holding relationship for an issued token. It is not an endorsement, not proof the token is safe, and not a promise the issuer will redeem it. The English wording to preserve is: A trust line records a relationship between accounts for one currency. “Trust” here does not mean the issuer has been approved as safe.
- English: A trust line records a relationship between accounts for one currency. “Trust” here does not mean the issuer has been approved as safe.
- Current translation: Eine Trust Line zeichnet eine Beziehung zwischen Konten für eine Währung auf. „Trust“ bedeutet hier nicht, dass der Emittent als sicher freigegeben wurde.
- Approve:
- Correction:
- Reviewer:
- Date:

### 4.23 `meta.trust-lines.title`

- Risk tier: Trust lines
- Page: Trust lines lesson (/xrpl/builders/trust-lines.html)
- Heading on that page: Trust lines lesson
- Purpose: This sentence is about the opt-in that lets an account hold an issued token.
- What the reader must understand: A trust line creates the holding relationship for an issued token. It is not an endorsement, not proof the token is safe, and not a promise the issuer will redeem it. The English wording to preserve is: Trust lines | Builders Hub | XRPL LAYMAN
- English: Trust lines | Builders Hub | XRPL LAYMAN
- Current translation: Trust Lines | Entwicklerzentrum | XRPL LAYMAN
- Approve:
- Correction:
- Reviewer:
- Date:

### 4.24 `meta.usage.description`

- Risk tier: Trust lines
- Page: Usage (/xrpl/usage.html)
- Heading on that page: Usage
- Purpose: This sentence is about the opt-in that lets an account hold an issued token.
- What the reader must understand: A trust line creates the holding relationship for an issued token. It is not an endorsement, not proof the token is safe, and not a promise the issuer will redeem it. The English wording to preserve is: Payments, tags, trustlines, offers, AMMs, NFTs, and how XRPL transactions execute.
- English: Payments, tags, trustlines, offers, AMMs, NFTs, and how XRPL transactions execute.
- Current translation: Zahlungen, Tags, Trustlines, Offers, AMMs, NFTs und wie XRPL-Transaktionen ausgeführt werden.
- Approve:
- Correction:
- Reviewer:
- Date:

### 4.25 `no-trustline-exists.e4056ea4`

- Risk tier: Trust lines
- Page: Definitions (/xrpl/definitions.html)
- Heading on that page: Trustline visualizer
- Purpose: This sentence is about the opt-in that lets an account hold an issued token.
- What the reader must understand: A trust line creates the holding relationship for an issued token. It is not an endorsement, not proof the token is safe, and not a promise the issuer will redeem it. The English wording to preserve is: No trustline exists.
- English: No trustline exists.
- Current translation: Es besteht keine Trustline.
- Approve:
- Correction:
- Reviewer:
- Date:

### 4.26 `no-trustline-needed.3867ff13`

- Risk tier: Trust lines
- Page: Definitions (/xrpl/definitions.html)
- Heading on that page: $XRP vs issued assets
- Purpose: This sentence is about the opt-in that lets an account hold an issued token.
- What the reader must understand: A trust line creates the holding relationship for an issued token. It is not an endorsement, not proof the token is safe, and not a promise the issuer will redeem it. The English wording to preserve is: No trustline needed
- English: No trustline needed
- Current translation: Keine Trustline nötig
- Approve:
- Correction:
- Reviewer:
- Date:

### 4.27 `owned-trustlines.fa5a4cf5`

- Risk tier: Trust lines
- Page: Definitions (/xrpl/definitions.html)
- Heading on that page: Reserve calculator
- Purpose: This sentence is about the opt-in that lets an account hold an issued token.
- What the reader must understand: A trust line creates the holding relationship for an issued token. It is not an endorsement, not proof the token is safe, and not a promise the issuer will redeem it. The English wording to preserve is: Owned trustlines
- English: Owned trustlines
- Current translation: Eigene Trustlines
- Approve:
- Correction:
- Reviewer:
- Date:

### 4.28 `payment-trustline-offer-nft-offer-or.5e4d07c6`

- Risk tier: Trust lines
- Page: Wallets (/xrpl/wallet-basics.html)
- Heading on that page: Type
- Purpose: This sentence is about the opt-in that lets an account hold an issued token.
- What the reader must understand: A trust line creates the holding relationship for an issued token. It is not an endorsement, not proof the token is safe, and not a promise the issuer will redeem it. The English wording to preserve is: Payment, trustline, offer, NFT offer, or account setting?
- English: Payment, trustline, offer, NFT offer, or account setting?
- Current translation: Payment, Trustline, Offer, NFT-Offer oder Kontoeinstellung?
- Approve:
- Correction:
- Reviewer:
- Date:

### 4.29 `trust-line.ecacf5fe`

- Risk tier: Trust lines
- Page: Trust lines lesson (/xrpl/builders/trust-lines.html)
- Heading on that page: Words you will use
- Purpose: This sentence is about the opt-in that lets an account hold an issued token.
- What the reader must understand: A trust line creates the holding relationship for an issued token. It is not an endorsement, not proof the token is safe, and not a promise the issuer will redeem it. The English wording to preserve is: Trust line
- English: Trust line
- Current translation: Trust Line
- Approve:
- Correction:
- Reviewer:
- Date:

### 4.30 `trust-lines.145a705b`

- Risk tier: Trust lines
- Page: Builders hub; NFT basics; Issuer control (/xrpl/builders/; /xrpl/builders/nft-basics.html; /xrpl/builders/issuer-control.html)
- Heading on that page: Disclosure; Keep building; Keep building
- Purpose: This sentence is about the opt-in that lets an account hold an issued token.
- What the reader must understand: A trust line creates the holding relationship for an issued token. It is not an endorsement, not proof the token is safe, and not a promise the issuer will redeem it. The English wording to preserve is: Trust lines
- English: Trust lines
- Current translation: Trust Lines
- Approve:
- Correction:
- Reviewer:
- Date:

### 4.31 `trust-lines.d4c063e8`

- Risk tier: Trust lines
- Page: Builders hub (/xrpl/builders/)
- Heading on that page: Start with a project, finish with evidence
- Purpose: This sentence is about the opt-in that lets an account hold an issued token.
- What the reader must understand: A trust line creates the holding relationship for an issued token. It is not an endorsement, not proof the token is safe, and not a promise the issuer will redeem it. The English wording to preserve is: Trust lines:
- English: Trust lines:
- Current translation: Trust Lines:
- Approve:
- Correction:
- Reviewer:
- Date:

### 4.32 `trust-lines.fdb24683`

- Risk tier: Trust lines
- Page: Builders hub; Create a token; NFT basics; Trust lines lesson; Issuer control; Xaman flows; Project launch (/xrpl/builders/; /xrpl/builders/create-token.html; /xrpl/builders/nft-basics.html; /xrpl/builders/trust-lines.html; /xrpl/builders/issuer-control.html; /xrpl/builders/xaman-flows.html; /xrpl/builders/project-launch-basics.html)
- Heading on that page: Builders Hub; Create a token with a clear identity; Read an NFT beyond its picture; Set a boundary for an issued asset; Know who can still change the rules; Follow a signing request to its real result; Launch something people can verify
- Purpose: This sentence is about the opt-in that lets an account hold an issued token.
- What the reader must understand: A trust line creates the holding relationship for an issued token. It is not an endorsement, not proof the token is safe, and not a promise the issuer will redeem it. The English wording to preserve is: {s1}Trust lines
- English: {s1}Trust lines
- Current translation: {s1}Trust Lines
- Approve:
- Correction:
- Reviewer:
- Date:

### 4.33 `trustline-usually-required.cb68ce8d`

- Risk tier: Trust lines
- Page: Definitions (/xrpl/definitions.html)
- Heading on that page: $XRP vs issued assets
- Purpose: This sentence is about the opt-in that lets an account hold an issued token.
- What the reader must understand: A trust line creates the holding relationship for an issued token. It is not an endorsement, not proof the token is safe, and not a promise the issuer will redeem it. The English wording to preserve is: Trustline usually required
- English: Trustline usually required
- Current translation: Trustline gewöhnlich nötig
- Approve:
- Correction:
- Reviewer:
- Date:

### 4.34 `trustline-visualizer.1fb70a8d`

- Risk tier: Trust lines
- Page: Definitions (/xrpl/definitions.html)
- Heading on that page: Trustline visualizer
- Purpose: This sentence is about the opt-in that lets an account hold an issued token.
- What the reader must understand: A trust line creates the holding relationship for an issued token. It is not an endorsement, not proof the token is safe, and not a promise the issuer will redeem it. The English wording to preserve is: Trustline visualizer
- English: Trustline visualizer
- Current translation: Trustline-Darstellung
- Approve:
- Correction:
- Reviewer:
- Date:

### 4.35 `trustline.9ba9cbe8`

- Risk tier: Trust lines
- Page: Definitions (/xrpl/definitions.html)
- Heading on that page: The issuer is part of the asset
- Purpose: This sentence is about the opt-in that lets an account hold an issued token.
- What the reader must understand: A trust line creates the holding relationship for an issued token. It is not an endorsement, not proof the token is safe, and not a promise the issuer will redeem it. The English wording to preserve is: Trustline
- English: Trustline
- Current translation: (same as the English) Trustline
- Approve:
- Correction:
- Reviewer:
- Date:

### 4.36 `trustlines.57b2be31`

- Risk tier: Trust lines
- Page: Definitions (/xrpl/definitions.html)
- Heading on that page: Understand the system.
- Purpose: This sentence is about the opt-in that lets an account hold an issued token.
- What the reader must understand: A trust line creates the holding relationship for an issued token. It is not an endorsement, not proof the token is safe, and not a promise the issuer will redeem it. The English wording to preserve is: Trustlines
- English: Trustlines
- Current translation: (same as the English) Trustlines
- Approve:
- Correction:
- Reviewer:
- Date:

### 4.37 `trustset-creates-or-modifies-a-trust.a6fb1a7c`

- Risk tier: Trust lines
- Page: Trust lines lesson (/xrpl/builders/trust-lines.html)
- Heading on that page: Understand what changes
- Purpose: This sentence is about the opt-in that lets an account hold an issued token.
- What the reader must understand: A trust line creates the holding relationship for an issued token. It is not an endorsement, not proof the token is safe, and not a promise the issuer will redeem it. The English wording to preserve is: TrustSet creates or modifies a trust-line relationship. Its LimitAmount identifies the currency, the counterparty issuer and the limit. Native XRP does not use trust lines. This lesson covers trust-line tokens, not MPT authorization.
- English: TrustSet creates or modifies a trust-line relationship. Its LimitAmount identifies the currency, the counterparty issuer and the limit. Native XRP does not use trust lines. This lesson covers trust-line tokens, not MPT authorization.
- Current translation: TrustSet erstellt oder ändert eine Trust-Line-Beziehung. Sein LimitAmount nennt die Währung, den Gegenpartei-Emittenten und das Limit. Natives XRP nutzt keine Trust Lines. Diese Lektion behandelt Trust-Line-Token, nicht die MPT-Autorisierung.
- Approve:
- Correction:
- Reviewer:
- Date:

### 4.38 `what-a-trustline-doesn-t-mean.c56a66d8`

- Risk tier: Trust lines
- Page: Definitions (/xrpl/definitions.html)
- Heading on that page: What a trustline doesn’t mean
- Purpose: This sentence is about the opt-in that lets an account hold an issued token.
- What the reader must understand: A trust line creates the holding relationship for an issued token. It is not an endorsement, not proof the token is safe, and not a promise the issuer will redeem it. The English wording to preserve is: What a trustline doesn’t mean
- English: What a trustline doesn’t mean
- Current translation: Was eine Trustline nicht bedeutet
- Approve:
- Correction:
- Reviewer:
- Date:

### 4.39 `what-s-a-trustline.b2cf3ed9`

- Risk tier: Trust lines
- Page: Definitions (/xrpl/definitions.html)
- Heading on that page: What’s a trustline?
- Purpose: This sentence is about the opt-in that lets an account hold an issued token.
- What the reader must understand: A trust line creates the holding relationship for an issued token. It is not an endorsement, not proof the token is safe, and not a promise the issuer will redeem it. The English wording to preserve is: What’s a trustline?
- English: What’s a trustline?
- Current translation: Was ist eine Trustline?
- Approve:
- Correction:
- Reviewer:
- Date:

### 4.40 `xrp-is-native-trust-lines-describe-i.d8c8105e`

- Risk tier: Trust lines
- Page: Trust lines lesson (/xrpl/builders/trust-lines.html)
- Heading on that page: Check your understanding
- Purpose: This sentence is about the opt-in that lets an account hold an issued token.
- What the reader must understand: A trust line creates the holding relationship for an issued token. It is not an endorsement, not proof the token is safe, and not a promise the issuer will redeem it. The English wording to preserve is: XRP is native; trust lines describe issued currencies.
- English: XRP is native; trust lines describe issued currencies.
- Current translation: XRP ist nativ; Trust Lines beschreiben emittierte Währungen.
- Approve:
- Correction:
- Reviewer:
- Date:

### 4.41 `your-account-usually-needs-a-trustli.bee0965e`

- Risk tier: Trust lines
- Page: Usage (/xrpl/usage.html)
- Heading on that page: Receiving issued assets
- Purpose: This sentence is about the opt-in that lets an account hold an issued token.
- What the reader must understand: A trust line creates the holding relationship for an issued token. It is not an endorsement, not proof the token is safe, and not a promise the issuer will redeem it. The English wording to preserve is: Your account usually needs a trustline to the exact issuer and currency.
- English: Your account usually needs a trustline to the exact issuer and currency.
- Current translation: Dein Konto braucht gewöhnlich eine Trustline zum genauen Emittenten und zur genauen Währung.
- Approve:
- Correction:
- Reviewer:
- Date:

## 5. Reserves and fees

This sentence is about XRP an account must keep, or about a fee.

What the reader must understand for this whole section: The teaching example is a 1 $XRP base reserve plus 0.2 $XRP for each qualifying owned object. The usual transaction fee is destroyed. It is not paid to validators. Live reserves can change by fee voting, so software should query the network.

### 5.1 `1-xrp-base-reserve.824f6b20`

- Risk tier: Reserves and fees
- Page: Definitions (/xrpl/definitions.html)
- Heading on that page: Why some $XRP stays reserved
- Purpose: This sentence is about XRP an account must keep, or about a fee.
- What the reader must understand: The teaching example is a 1 $XRP base reserve plus 0.2 $XRP for each qualifying owned object. The usual transaction fee is destroyed. It is not paid to validators. Live reserves can change by fee voting, so software should query the network. The English wording to preserve is: 1 $XRP base reserve
- English: 1 $XRP base reserve
- Current translation: 1 $XRP Basisreserve
- Approve:
- Correction:
- Reviewer:
- Date:

### 5.2 `a-sale-normally-uses-an-nft-offer-an.ae15a8df`

- Risk tier: Reserves and fees
- Page: NFT basics (/xrpl/builders/nft-basics.html)
- Heading on that page: Follow the offer lifecycle
- Purpose: This sentence is about XRP an account must keep, or about a fee.
- What the reader must understand: The teaching example is a 1 $XRP base reserve plus 0.2 $XRP for each qualifying owned object. The usual transaction fee is destroyed. It is not paid to validators. Live reserves can change by fee voting, so software should query the network. The English wording to preserve is: A sale normally uses an NFT offer and its acceptance. Creating an offer is not completed payment or delivery. Before acceptance, review the exact NFT, payment asset, amount, destination restriction, expiration and issuer transfer fee. NFT transfer fees use units of 0.001%; for example 1,000 represents 1%, not 1,000 XRP. Applicability depends on the transfer. Confirm the validated outcome and ownership afterward.
- English: A sale normally uses an NFT offer and its acceptance. Creating an offer is not completed payment or delivery. Before acceptance, review the exact NFT, payment asset, amount, destination restriction, expiration and issuer transfer fee. NFT transfer fees use units of 0.001%; for example 1,000 represents 1%, not 1,000 XRP. Applicability depends on the transfer. Confirm the validated outcome and ownership afterward.
- Current translation: Ein Verkauf nutzt normalerweise ein NFT-Offer und dessen Annahme. Ein Offer zu erstellen ist keine abgeschlossene Zahlung und keine Lieferung. Prüfe vor der Annahme das genaue NFT, das Zahlungs-Asset, den Betrag, die Zielbeschränkung, den Ablauf und die Transfergebühr des Emittenten. NFT-Transfergebühren nutzen Einheiten von 0,001 %; zum Beispiel steht 1.000 für 1%, nicht für 1.000 XRP. Ob sie greifen, hängt von der Übertragung ab. Bestätige danach das validierte Ergebnis und das Eigentum.
- Approve:
- Correction:
- Reviewer:
- Date:

### 5.3 `amm-fee.8a9bd5c7`

- Risk tier: Reserves and fees
- Page: Usage (/xrpl/usage.html)
- Heading on that page: Simple slippage visual
- Purpose: This sentence is about XRP an account must keep, or about a fee.
- What the reader must understand: The teaching example is a 1 $XRP base reserve plus 0.2 $XRP for each qualifying owned object. The usual transaction fee is destroyed. It is not paid to validators. Live reserves can change by fee voting, so software should query the network. The English wording to preserve is: AMM fee %
- English: AMM fee %
- Current translation: AMM-Gebühr %
- Approve:
- Correction:
- Reviewer:
- Date:

### 5.4 `an-account-becomes-active-on-ledger.93d4ca9b`

- Risk tier: Reserves and fees
- Page: Wallets (/xrpl/wallet-basics.html)
- Heading on that page: Funding an XRPL account
- Purpose: This sentence is about XRP an account must keep, or about a fee.
- What the reader must understand: The teaching example is a 1 $XRP base reserve plus 0.2 $XRP for each qualifying owned object. The usual transaction fee is destroyed. It is not paid to validators. Live reserves can change by fee voting, so software should query the network. The English wording to preserve is: An account becomes active on-ledger when it receives enough $XRP to meet the current reserve.
- English: An account becomes active on-ledger when it receives enough $XRP to meet the current reserve.
- Current translation: Ein Konto wird im Ledger aktiv, wenn es genug $XRP erhält, um die aktuelle Reserve zu erfüllen.
- Approve:
- Correction:
- Reviewer:
- Date:

### 5.5 `an-nft-doesn-t-always-equal-one-owne.12e690f6`

- Risk tier: Reserves and fees
- Page: Definitions (/xrpl/definitions.html)
- Heading on that page: Reserve calculator
- Purpose: This sentence is about XRP an account must keep, or about a fee.
- What the reader must understand: The teaching example is a 1 $XRP base reserve plus 0.2 $XRP for each qualifying owned object. The usual transaction fee is destroyed. It is not paid to validators. Live reserves can change by fee voting, so software should query the network. The English wording to preserve is: An NFT doesn’t always equal one owner-reserve item. XRPL stores NFTs in NFTokenPage objects, and each page can hold multiple NFTs. Don’t count individual NFTs as individual reserve objects.
- English: An NFT doesn’t always equal one owner-reserve item. XRPL stores NFTs in NFTokenPage objects, and each page can hold multiple NFTs. Don’t count individual NFTs as individual reserve objects.
- Current translation: Ein NFT ist nicht immer ein einzelnes Owner-Reserve-Objekt. XRPL speichert NFTs in NFTokenPage-Objekten, und jede Seite kann mehrere NFTs halten. Zähle einzelne NFTs nicht als einzelne Reserve-Objekte.
- Approve:
- Correction:
- Reviewer:
- Date:

### 5.6 `an-xrpl-nft-is-a-unique-on-ledger-to.e0bd5a2f`

- Risk tier: Reserves and fees
- Page: Definitions (/xrpl/definitions.html)
- Heading on that page: NFTs and ledger ownership
- Purpose: This sentence is about XRP an account must keep, or about a fee.
- What the reader must understand: The teaching example is a 1 $XRP base reserve plus 0.2 $XRP for each qualifying owned object. The usual transaction fee is destroyed. It is not paid to validators. Live reserves can change by fee voting, so software should query the network. The English wording to preserve is: An XRPL NFT is a unique on-ledger token with its own identifier, flags, issuer, taxon, sequence, and optional transfer fee.
- English: An XRPL NFT is a unique on-ledger token with its own identifier, flags, issuer, taxon, sequence, and optional transfer fee.
- Current translation: Ein XRPL-NFT ist ein eindeutiges Token im Ledger mit eigener Kennung, eigenen Flags, Emittent, Taxon, Sequence und optionaler Transfergebühr.
- Approve:
- Correction:
- Reviewer:
- Date:

### 5.7 `current-reserve-rules.57f361c2`

- Risk tier: Reserves and fees
- Page: Trust lines lesson (/xrpl/builders/trust-lines.html)
- Heading on that page: Go deeper with official sources
- Purpose: This sentence is about XRP an account must keep, or about a fee.
- What the reader must understand: The teaching example is a 1 $XRP base reserve plus 0.2 $XRP for each qualifying owned object. The usual transaction fee is destroyed. It is not paid to validators. Live reserves can change by fee voting, so software should query the network. The English wording to preserve is: Current reserve rules
- English: Current reserve rules
- Current translation: Aktuelle Reserveregeln
- Approve:
- Correction:
- Reviewer:
- Date:

### 5.8 `definitions.reserve.many`

- Risk tier: Reserves and fees
- Page: Shared chrome or meta text
- Purpose: This sentence is about XRP an account must keep, or about a fee.
- What the reader must understand: The teaching example is a 1 $XRP base reserve plus 0.2 $XRP for each qualifying owned object. The usual transaction fee is destroyed. It is not paid to validators. Live reserves can change by fee voting, so software should query the network. The English wording to preserve is: 1 $XRP base reserve + {objects} owned objects × 0.2 $XRP.
- English: 1 $XRP base reserve + {objects} owned objects × 0.2 $XRP.
- Current translation: 1 $XRP Basisreserve + {objects} eigene Objekte × 0.2 $XRP.
- Approve:
- Correction:
- Reviewer:
- Date:

### 5.9 `definitions.reserve.one`

- Risk tier: Reserves and fees
- Page: Shared chrome or meta text
- Purpose: This sentence is about XRP an account must keep, or about a fee.
- What the reader must understand: The teaching example is a 1 $XRP base reserve plus 0.2 $XRP for each qualifying owned object. The usual transaction fee is destroyed. It is not paid to validators. Live reserves can change by fee voting, so software should query the network. The English wording to preserve is: 1 $XRP base reserve + {objects} owned object × 0.2 $XRP.
- English: 1 $XRP base reserve + {objects} owned object × 0.2 $XRP.
- Current translation: 1 $XRP Basisreserve + {objects} eigenes Objekt × 0.2 $XRP.
- Approve:
- Correction:
- Reviewer:
- Date:

### 5.10 `distinguish-balance-limit-controls-a.e936c1d1`

- Risk tier: Reserves and fees
- Page: Builders hub (/xrpl/builders/)
- Heading on that page: Start with a project, finish with evidence
- Purpose: This sentence is about XRP an account must keep, or about a fee.
- What the reader must understand: The teaching example is a 1 $XRP base reserve plus 0.2 $XRP for each qualifying owned object. The usual transaction fee is destroyed. It is not paid to validators. Live reserves can change by fee voting, so software should query the network. The English wording to preserve is: {s1} distinguish balance, limit, controls and reserves.
- English: {s1} distinguish balance, limit, controls and reserves.
- Current translation: {s1} unterscheide Saldo, Limit, Kontrollen und Reserven.
- Approve:
- Correction:
- Reviewer:
- Date:

### 5.11 `estimate-the-reserve-for-a-simple-ac.4984109c`

- Risk tier: Reserves and fees
- Page: Definitions (/xrpl/definitions.html)
- Heading on that page: Reserve calculator
- Purpose: This sentence is about XRP an account must keep, or about a fee.
- What the reader must understand: The teaching example is a 1 $XRP base reserve plus 0.2 $XRP for each qualifying owned object. The usual transaction fee is destroyed. It is not paid to validators. Live reserves can change by fee voting, so software should query the network. The English wording to preserve is: Estimate the reserve for a simple account. Actual ownership and reserve behavior can vary by object type.
- English: Estimate the reserve for a simple account. Actual ownership and reserve behavior can vary by object type.
- Current translation: Schätze die Reserve für ein einfaches Konto. Tatsächliches Eigentum und das Reserveverhalten können je nach Objektart abweichen.
- Approve:
- Correction:
- Reviewer:
- Date:

### 5.12 `every-displayed-xrp-is-spendable-som.2dedfbaa`

- Risk tier: Reserves and fees
- Page: Definitions (/xrpl/definitions.html)
- Heading on that page: What people keep mixing up
- Purpose: This sentence is about XRP an account must keep, or about a fee.
- What the reader must understand: The teaching example is a 1 $XRP base reserve plus 0.2 $XRP for each qualifying owned object. The usual transaction fee is destroyed. It is not paid to validators. Live reserves can change by fee voting, so software should query the network. The English wording to preserve is: {s1} Every displayed $XRP is spendable.{br2}{s3} Some may be required for account and owner reserves.
- English: {s1} Every displayed $XRP is spendable.{br2}{s3} Some may be required for account and owner reserves.
- Current translation: {s1} Jedes angezeigte $XRP ist ausgebbar.{br2}{s3} Ein Teil kann für Konto- und Owner-Reserven nötig sein.
- Approve:
- Correction:
- Reviewer:
- Date:

### 5.13 `fee.c6e89c9c`

- Risk tier: Reserves and fees
- Page: Definitions; Wallets; Safety (/xrpl/definitions.html; /xrpl/wallet-basics.html; /xrpl/safety.html)
- Heading on that page: Fee; Fee; Fee
- Purpose: This sentence is about XRP an account must keep, or about a fee.
- What the reader must understand: The teaching example is a 1 $XRP base reserve plus 0.2 $XRP for each qualifying owned object. The usual transaction fee is destroyed. It is not paid to validators. Live reserves can change by fee voting, so software should query the network. The English wording to preserve is: Fee
- English: Fee
- Current translation: Gebühr
- Approve:
- Correction:
- Reviewer:
- Date:

### 5.14 `flags-uri-taxon-offers-transfer-fees.f3d2bfe9`

- Risk tier: Reserves and fees
- Page: Builders hub (/xrpl/builders/)
- Heading on that page: NFTs
- Purpose: This sentence is about XRP an account must keep, or about a fee.
- What the reader must understand: The teaching example is a 1 $XRP base reserve plus 0.2 $XRP for each qualifying owned object. The usual transaction fee is destroyed. It is not paid to validators. Live reserves can change by fee voting, so software should query the network. The English wording to preserve is: Flags, URI, taxon, offers, transfer fees, and lifecycle.
- English: Flags, URI, taxon, offers, transfer fees, and lifecycle.
- Current translation: Flags, URI, Taxon, Offers, Transfergebühren und Lebenszyklus.
- Approve:
- Correction:
- Reviewer:
- Date:

### 5.15 `footer.rights`

- Risk tier: Reserves and fees
- Page: Dashboard; Definitions; Wallets; Usage; Safety; Investing reality; Builders hub; Create a token; NFT basics; Trust lines lesson; Issuer control; Xaman flows; Project launch (/xrpl/; /xrpl/definitions.html; /xrpl/wallet-basics.html; /xrpl/usage.html; /xrpl/safety.html; /xrpl/investing-reality.html; /xrpl/builders/; /xrpl/builders/create-token.html; /xrpl/builders/nft-basics.html; /xrpl/builders/trust-lines.html; /xrpl/builders/issuer-control.html; /xrpl/builders/xaman-flows.html; /xrpl/builders/project-launch-basics.html)
- Heading on that page: BUILDERS HUB; Keep moving; Keep moving; Keep moving; Keep moving; Keep moving; Keep moving; Keep building; Keep building; Keep building; Keep building; Keep building; Keep building
- Purpose: This sentence is about XRP an account must keep, or about a fee.
- What the reader must understand: The teaching example is a 1 $XRP base reserve plus 0.2 $XRP for each qualifying owned object. The usual transaction fee is destroyed. It is not paid to validators. Live reserves can change by fee voting, so software should query the network. The English wording to preserve is: © 2026 House of Cauliman. All rights reserved.
- English: © 2026 House of Cauliman. All rights reserved.
- Current translation: © 2026 House of Cauliman. Alle Rechte vorbehalten.
- Approve:
- Correction:
- Reviewer:
- Date:

### 5.16 `inspect-a-fictional-proposed-sale-nf.f3daf39c`

- Risk tier: Reserves and fees
- Page: NFT basics (/xrpl/builders/nft-basics.html)
- Heading on that page: Inspect the club membership collectible
- Purpose: This sentence is about XRP an account must keep, or about a fee.
- What the reader must understand: The teaching example is a 1 $XRP base reserve plus 0.2 $XRP for each qualifying owned object. The usual transaction fee is destroyed. It is not paid to validators. Live reserves can change by fee voting, so software should query the network. The English wording to preserve is: Inspect a fictional proposed sale: NFT Record N, price 20 XRP, restricted recipient Member C, and a stated expiry. The NFT transfer-fee field 1,000 represents 1%. On an applicable 20 XRP sale that is 0.2 XRP; check the actual sale mode and settlement accounting rather than assuming every displayed price is the seller net.
- English: Inspect a fictional proposed sale: NFT Record N, price 20 XRP, restricted recipient Member C, and a stated expiry. The NFT transfer-fee field 1,000 represents 1%. On an applicable 20 XRP sale that is 0.2 XRP; check the actual sale mode and settlement accounting rather than assuming every displayed price is the seller net.
- Current translation: Prüfe einen fiktiven vorgeschlagenen Verkauf: NFT Record N, Preis 20 XRP, nur Member C als zugelassener Empfänger und ein genannter Ablauf. Das NFT-Transfergebühr-Feld 1.000 steht für 1%. Bei einem Verkauf über 20 XRP, für den diese Gebühr gilt, sind das 0.2 XRP; prüfe den tatsächlichen Verkaufsmodus und die Abrechnung, statt anzunehmen, jeder angezeigte Preis sei der Nettoerlös der verkaufenden Person.
- Approve:
- Correction:
- Reviewer:
- Date:

### 5.17 `is-the-fee-abnormal.20139bf0`

- Risk tier: Reserves and fees
- Page: Safety (/xrpl/safety.html)
- Heading on that page: Fee
- Purpose: This sentence is about XRP an account must keep, or about a fee.
- What the reader must understand: The teaching example is a 1 $XRP base reserve plus 0.2 $XRP for each qualifying owned object. The usual transaction fee is destroyed. It is not paid to validators. Live reserves can change by fee voting, so software should query the network. The English wording to preserve is: Is the fee abnormal?
- English: Is the fee abnormal?
- Current translation: Ist die Gebühr ungewöhnlich?
- Approve:
- Correction:
- Reviewer:
- Date:

### 5.18 `ledger-objects-can-affect-the-xrp-re.e36fd0f5`

- Risk tier: Reserves and fees
- Page: Trust lines lesson (/xrpl/builders/trust-lines.html)
- Heading on that page: Plan for reserves and removal
- Purpose: This sentence is about XRP an account must keep, or about a fee.
- What the reader must understand: The teaching example is a 1 $XRP base reserve plus 0.2 $XRP for each qualifying owned object. The usual transaction fee is destroyed. It is not paid to validators. Live reserves can change by fee voting, so software should query the network. The English wording to preserve is: Ledger objects can affect the XRP reserve needed by an account. Reserve rules and amounts can change, and trust-line exceptions exist: check the current network rules rather than assuming every line costs the same. Setting a limit to zero does not erase a nonzero balance or guarantee immediate removal. A removable line must meet the ledger’s default-state conditions.
- English: Ledger objects can affect the XRP reserve needed by an account. Reserve rules and amounts can change, and trust-line exceptions exist: check the current network rules rather than assuming every line costs the same. Setting a limit to zero does not erase a nonzero balance or guarantee immediate removal. A removable line must meet the ledger’s default-state conditions.
- Current translation: Ledger-Objekte können die XRP-Reserve beeinflussen, die ein Konto braucht. Reserveregeln und Beträge können sich ändern, und es gibt Ausnahmen bei Trust Lines: prüfe die aktuellen Netzwerkregeln, statt anzunehmen, jede Linie koste dasselbe. Ein Limit auf null zu setzen löscht keinen Saldo ungleich null und garantiert keine sofortige Entfernung. Eine entfernbare Linie muss die Bedingungen des Ledgers für den Standardzustand erfüllen.
- Approve:
- Correction:
- Reviewer:
- Date:

### 5.19 `mainnet-currently-uses-a-plus-these.85124d92`

- Risk tier: Reserves and fees
- Page: Definitions (/xrpl/definitions.html)
- Heading on that page: Why some $XRP stays reserved
- Purpose: This sentence is about XRP an account must keep, or about a fee.
- What the reader must understand: The teaching example is a 1 $XRP base reserve plus 0.2 $XRP for each qualifying owned object. The usual transaction fee is destroyed. It is not paid to validators. Live reserves can change by fee voting, so software should query the network. The English wording to preserve is: Mainnet currently uses a {s1} plus {s2}. These values can change through validator fee voting, so software should query the network instead of hard-coding them forever.
- English: Mainnet currently uses a {s1} plus {s2}. These values can change through validator fee voting, so software should query the network instead of hard-coding them forever.
- Current translation: Mainnet nutzt derzeit eine {s1} plus {s2}. Diese Werte können sich durch das Fee-Voting der Validatoren ändern, deshalb sollte Software das Netzwerk abfragen, statt sie für immer fest zu codieren.
- Approve:
- Correction:
- Reviewer:
- Date:

### 5.20 `our-fictional-neighborhood-club-want.30fb4b14`

- Risk tier: Reserves and fees
- Page: Create a token (/xrpl/builders/create-token.html)
- Heading on that page: Build the club-credit specification
- Purpose: This sentence is about XRP an account must keep, or about a fee.
- What the reader must understand: The teaching example is a 1 $XRP base reserve plus 0.2 $XRP for each qualifying owned object. The usual transaction fee is destroyed. It is not paid to validators. Live reserves can change by fee voting, so software should query the network. The English wording to preserve is: Our fictional neighborhood club wants members to reserve workshop seats with credits. Carry this same project through the course. Labels such as Issuer A are paper labels, not usable addresses. The point is to find missing decisions before anyone creates an asset.
- English: Our fictional neighborhood club wants members to reserve workshop seats with credits. Carry this same project through the course. Labels such as Issuer A are paper labels, not usable addresses. The point is to find missing decisions before anyone creates an asset.
- Current translation: Unser fiktiver Nachbarschaftsclub will, dass Mitglieder Workshop-Plätze mit Credits reservieren. Trag dasselbe Projekt durch den Kurs. Bezeichnungen wie Issuer A sind Papierbezeichnungen, keine nutzbaren Adressen. Es geht darum, fehlende Entscheidungen zu finden, bevor irgendjemand ein Asset erstellt.
- Approve:
- Correction:
- Reviewer:
- Date:

### 5.21 `plan-for-reserves-and-removal.05cef868`

- Risk tier: Reserves and fees
- Page: Trust lines lesson (/xrpl/builders/trust-lines.html)
- Heading on that page: Plan for reserves and removal
- Purpose: This sentence is about XRP an account must keep, or about a fee.
- What the reader must understand: The teaching example is a 1 $XRP base reserve plus 0.2 $XRP for each qualifying owned object. The usual transaction fee is destroyed. It is not paid to validators. Live reserves can change by fee voting, so software should query the network. The English wording to preserve is: Plan for reserves and removal
- English: Plan for reserves and removal
- Current translation: Plane Reserven und Entfernung
- Approve:
- Correction:
- Reviewer:
- Date:

### 5.22 `plan-reserve-inspection-separately-f.62e08c92`

- Risk tier: Reserves and fees
- Page: Trust lines lesson (/xrpl/builders/trust-lines.html)
- Heading on that page: Read a member account before changing anything
- Purpose: This sentence is about XRP an account must keep, or about a fee.
- What the reader must understand: The teaching example is a 1 $XRP base reserve plus 0.2 $XRP for each qualifying owned object. The usual transaction fee is destroyed. It is not paid to validators. Live reserves can change by fee voting, so software should query the network. The English wording to preserve is: Plan reserve inspection separately from the token quantity. Obtain the network current base/incremental reserves and the account relevant owner objects when implementing a real tool. Do not multiply every visible token balance by one fixed XRP charge: trust-line and other object rules have exceptions.
- English: Plan reserve inspection separately from the token quantity. Obtain the network current base/incremental reserves and the account relevant owner objects when implementing a real tool. Do not multiply every visible token balance by one fixed XRP charge: trust-line and other object rules have exceptions.
- Current translation: Plane die Reserveprüfung getrennt von der Token-Menge. Hol die aktuellen Basis- und Zusatzreserven des Netzwerks und die relevanten Owner-Objekte des Kontos, wenn du ein echtes Werkzeug umsetzt. Multipliziere nicht jeden sichtbaren Token-Saldo mit einer festen XRP-Belastung: Trust Lines und andere Objektregeln haben Ausnahmen.
- Approve:
- Correction:
- Reviewer:
- Date:

### 5.23 `read-balance-limit-issuer-controls-a.88aa5ddc`

- Risk tier: Reserves and fees
- Page: Trust lines lesson (/xrpl/builders/trust-lines.html)
- Heading on that page: Before you start
- Purpose: This sentence is about XRP an account must keep, or about a fee.
- What the reader must understand: The teaching example is a 1 $XRP base reserve plus 0.2 $XRP for each qualifying owned object. The usual transaction fee is destroyed. It is not paid to validators. Live reserves can change by fee voting, so software should query the network. The English wording to preserve is: {s1} Read balance, limit, issuer controls and reserve implications without confusing a settings change with receiving money.
- English: {s1} Read balance, limit, issuer controls and reserve implications without confusing a settings change with receiving money.
- Current translation: {s1} Lies Saldo, Limit, Emittentenkontrollen und Folgen für die Reserve, ohne eine Einstellungsänderung mit dem Empfang von Geld zu verwechseln.
- Approve:
- Correction:
- Reviewer:
- Date:

### 5.24 `reserve-calculator.67176307`

- Risk tier: Reserves and fees
- Page: Definitions (/xrpl/definitions.html)
- Heading on that page: Reserve calculator
- Purpose: This sentence is about XRP an account must keep, or about a fee.
- What the reader must understand: The teaching example is a 1 $XRP base reserve plus 0.2 $XRP for each qualifying owned object. The usual transaction fee is destroyed. It is not paid to validators. Live reserves can change by fee voting, so software should query the network. The English wording to preserve is: Reserve calculator
- English: Reserve calculator
- Current translation: Reserverechner
- Approve:
- Correction:
- Reviewer:
- Date:

### 5.25 `reserve.187579e3`

- Risk tier: Reserves and fees
- Page: Wallets; Trust lines lesson (/xrpl/wallet-basics.html; /xrpl/builders/trust-lines.html)
- Heading on that page: Reserve; Words you will use
- Purpose: This sentence is about XRP an account must keep, or about a fee.
- What the reader must understand: The teaching example is a 1 $XRP base reserve plus 0.2 $XRP for each qualifying owned object. The usual transaction fee is destroyed. It is not paid to validators. Live reserves can change by fee voting, so software should query the network. The English wording to preserve is: Reserve
- English: Reserve
- Current translation: (same as the English) Reserve
- Approve:
- Correction:
- Reviewer:
- Date:

### 5.26 `reserves.5ac63fc4`

- Risk tier: Reserves and fees
- Page: Definitions (/xrpl/definitions.html)
- Heading on that page: Understand the system.
- Purpose: This sentence is about XRP an account must keep, or about a fee.
- What the reader must understand: The teaching example is a 1 $XRP base reserve plus 0.2 $XRP for each qualifying owned object. The usual transaction fee is destroyed. It is not paid to validators. Live reserves can change by fee voting, so software should query the network. The English wording to preserve is: Reserves
- English: Reserves
- Current translation: Reserven
- Approve:
- Correction:
- Reviewer:
- Date:

### 5.27 `separate-product-revenue-from-xrpl-n.48a70ebe`

- Risk tier: Reserves and fees
- Page: Builders hub (/xrpl/builders/)
- Heading on that page: Builder standard
- Purpose: This sentence is about XRP an account must keep, or about a fee.
- What the reader must understand: The teaching example is a 1 $XRP base reserve plus 0.2 $XRP for each qualifying owned object. The usual transaction fee is destroyed. It is not paid to validators. Live reserves can change by fee voting, so software should query the network. The English wording to preserve is: Separate product revenue from XRPL network fees.
- English: Separate product revenue from XRPL network fees.
- Current translation: Trenn Produktumsatz von XRPL-Netzwerkgebühren.
- Approve:
- Correction:
- Reviewer:
- Date:

### 5.28 `technical-references-checked-3-octob.9bab9f8c`

- Risk tier: Reserves and fees
- Page: Create a token; NFT basics; Trust lines lesson; Issuer control; Xaman flows; Project launch (/xrpl/builders/create-token.html; /xrpl/builders/nft-basics.html; /xrpl/builders/trust-lines.html; /xrpl/builders/issuer-control.html; /xrpl/builders/xaman-flows.html; /xrpl/builders/project-launch-basics.html)
- Heading on that page: Go deeper with official sources; Go deeper with official sources; Go deeper with official sources; Go deeper with official sources; Go deeper with official sources; Go deeper with official sources
- Purpose: This sentence is about XRP an account must keep, or about a fee.
- What the reader must understand: The teaching example is a 1 $XRP base reserve plus 0.2 $XRP for each qualifying owned object. The usual transaction fee is destroyed. It is not paid to validators. Live reserves can change by fee voting, so software should query the network. The English wording to preserve is: Technical references checked 3 October 2026. Network amendments, wallet support and reserve rules can change. Check current documentation before implementing real transactions.
- English: Technical references checked 3 October 2026. Network amendments, wallet support and reserve rules can change. Check current documentation before implementing real transactions.
- Current translation: Technische Referenzen geprüft am 3. Oktober 2026. Netzwerk-Amendments, Wallet-Unterstützung und Reserveregeln können sich ändern. Prüfe die aktuelle Dokumentation, bevor du echte Transaktionen umsetzt.
- Approve:
- Correction:
- Reviewer:
- Date:

### 5.29 `the-club-now-proposes-an-optional-co.3e0bfebc`

- Risk tier: Reserves and fees
- Page: NFT basics (/xrpl/builders/nft-basics.html)
- Heading on that page: Inspect the club membership collectible
- Purpose: This sentence is about XRP an account must keep, or about a fee.
- What the reader must understand: The teaching example is a 1 $XRP base reserve plus 0.2 $XRP for each qualifying owned object. The usual transaction fee is destroyed. It is not paid to validators. Live reserves can change by fee voting, so software should query the network. The English wording to preserve is: The club now proposes an optional commemorative NFT. It is separate from the credits. Use this fictional record: network Testnet; NFT identity Record N; issuer Issuer A; owner Member B; transferable yes; burnable yes; mutable yes; transfer-fee field 1,000; URI an HTTPS metadata page. These are descriptive fields, not transaction JSON.
- English: The club now proposes an optional commemorative NFT. It is separate from the credits. Use this fictional record: network Testnet; NFT identity Record N; issuer Issuer A; owner Member B; transferable yes; burnable yes; mutable yes; transfer-fee field 1,000; URI an HTTPS metadata page. These are descriptive fields, not transaction JSON.
- Current translation: Der Club schlägt jetzt ein optionales Erinnerungs-NFT vor. Es ist von den Credits getrennt. Nutze diesen fiktiven Datensatz: Netzwerk Testnet; NFT-Identität Record N; Emittent Issuer A; Eigentümer Member B; transferable ja; burnable ja; mutable ja; Transfergebühr-Feld 1.000; URI eine HTTPS-Metadatenseite. Das sind beschreibende Felder, kein Transaktions-JSON.
- Approve:
- Correction:
- Reviewer:
- Date:

### 5.30 `the-network-fee-goes-to-validators-x.e7651eb0`

- Risk tier: Reserves and fees
- Page: Definitions (/xrpl/definitions.html)
- Heading on that page: What people keep mixing up
- Purpose: This sentence is about XRP an account must keep, or about a fee.
- What the reader must understand: The teaching example is a 1 $XRP base reserve plus 0.2 $XRP for each qualifying owned object. The usual transaction fee is destroyed. It is not paid to validators. Live reserves can change by fee voting, so software should query the network. The English wording to preserve is: {s1} The network fee goes to validators.{br2}{s3} XRPL transaction costs are destroyed.
- English: {s1} The network fee goes to validators.{br2}{s3} XRPL transaction costs are destroyed.
- Current translation: {s1} Die Netzwerkgebühr geht an die Validatoren.{br2}{s3} XRPL-Transaktionskosten werden vernichtet.
- Approve:
- Correction:
- Reviewer:
- Date:

### 5.31 `total-balance-is-not-the-same-as-xrp.cd4ebe84`

- Risk tier: Reserves and fees
- Page: Trust lines lesson (/xrpl/builders/trust-lines.html)
- Heading on that page: There is XRP but a new object cannot be created
- Purpose: This sentence is about XRP an account must keep, or about a fee.
- What the reader must understand: The teaching example is a 1 $XRP base reserve plus 0.2 $XRP for each qualifying owned object. The usual transaction fee is destroyed. It is not paid to validators. Live reserves can change by fee voting, so software should query the network. The English wording to preserve is: Total balance is not the same as XRP available above reserve and fee needs. Check the exact result and current reserve rules before changing unrelated settings.
- English: Total balance is not the same as XRP available above reserve and fee needs. Check the exact result and current reserve rules before changing unrelated settings.
- Current translation: Der Gesamtsaldo ist nicht dasselbe wie XRP, das über Reserve- und Gebührenbedarf hinaus verfügbar ist. Prüfe das genaue Ergebnis und die aktuellen Reserveregeln, bevor du unabhängige Einstellungen änderst.
- Approve:
- Correction:
- Reviewer:
- Date:

### 5.32 `transfer-fee.3a7f5395`

- Risk tier: Reserves and fees
- Page: Definitions (/xrpl/definitions.html)
- Heading on that page: Transfer Fee
- Purpose: This sentence is about XRP an account must keep, or about a fee.
- What the reader must understand: The teaching example is a 1 $XRP base reserve plus 0.2 $XRP for each qualifying owned object. The usual transaction fee is destroyed. It is not paid to validators. Live reserves can change by fee voting, so software should query the network. The English wording to preserve is: Transfer Fee
- English: Transfer Fee
- Current translation: Transfergebühr
- Approve:
- Correction:
- Reviewer:
- Date:

### 5.33 `usage.slippage.copy`

- Risk tier: Reserves and fees
- Page: Shared chrome or meta text
- Purpose: This sentence is about XRP an account must keep, or about a fee.
- What the reader must understand: The teaching example is a 1 $XRP base reserve plus 0.2 $XRP for each qualifying owned object. The usual transaction fee is destroyed. It is not paid to validators. Live reserves can change by fee voting, so software should query the network. The English wording to preserve is: Trade size is {pct}% of the selected pool side before a {fee}% fee.
- English: Trade size is {pct}% of the selected pool side before a {fee}% fee.
- Current translation: Vor Anwendung der Gebühr von {fee}% entspricht die Handelsgröße {pct}% des Guthabens auf der gewählten Poolseite.
- Approve:
- Correction:
- Reviewer:
- Date:

### 5.34 `used-for-reserves-and-transaction-co.64cd2832`

- Risk tier: Reserves and fees
- Page: Definitions (/xrpl/definitions.html)
- Heading on that page: $XRP vs issued assets
- Purpose: This sentence is about XRP an account must keep, or about a fee.
- What the reader must understand: The teaching example is a 1 $XRP base reserve plus 0.2 $XRP for each qualifying owned object. The usual transaction fee is destroyed. It is not paid to validators. Live reserves can change by fee voting, so software should query the network. The English wording to preserve is: Used for reserves and transaction costs
- English: Used for reserves and transaction costs
- Current translation: Genutzt für Reserven und Transaktionskosten
- Approve:
- Correction:
- Reviewer:
- Date:

### 5.35 `why-some-xrp-stays-reserved.bb60d0fd`

- Risk tier: Reserves and fees
- Page: Definitions (/xrpl/definitions.html)
- Heading on that page: Why some $XRP stays reserved
- Purpose: This sentence is about XRP an account must keep, or about a fee.
- What the reader must understand: The teaching example is a 1 $XRP base reserve plus 0.2 $XRP for each qualifying owned object. The usual transaction fee is destroyed. It is not paid to validators. Live reserves can change by fee voting, so software should query the network. The English wording to preserve is: Why some $XRP stays reserved
- English: Why some $XRP stays reserved
- Current translation: Warum ein Teil von $XRP reserviert bleibt
- Approve:
- Correction:
- Reviewer:
- Date:

### 5.36 `write-a-one-page-release-contract-us.4be7eeff`

- Risk tier: Reserves and fees
- Page: Project launch (/xrpl/builders/project-launch-basics.html)
- Heading on that page: Work through this example
- Purpose: This sentence is about XRP an account must keep, or about a fee.
- What the reader must understand: The teaching example is a 1 $XRP base reserve plus 0.2 $XRP for each qualifying owned object. The usual transaction fee is destroyed. It is not paid to validators. Live reserves can change by fee voting, so software should query the network. The English wording to preserve is: Write a one-page release contract: user outcome, scope, identities, controls, fees and limitations.
- English: Write a one-page release contract: user outcome, scope, identities, controls, fees and limitations.
- Current translation: Schreib einen einseitigen Veröffentlichungsvertrag: Ergebnis für Nutzer, Umfang, Identitäten, Kontrollen, Gebühren und Grenzen.
- Approve:
- Correction:
- Reviewer:
- Date:

### 5.37 `write-a-redemption-promise-one-credi.303df116`

- Risk tier: Reserves and fees
- Page: Create a token (/xrpl/builders/create-token.html)
- Heading on that page: Build the club-credit specification
- Purpose: This sentence is about XRP an account must keep, or about a fee.
- What the reader must understand: The teaching example is a 1 $XRP base reserve plus 0.2 $XRP for each qualifying owned object. The usual transaction fee is destroyed. It is not paid to validators. Live reserves can change by fee voting, so software should query the network. The English wording to preserve is: Write a redemption promise: one credit reserves one eligible seat, subject to the written booking terms. Decide cancellations, expiry, refunds, support and what happens if the club closes. The token protocol does not write or enforce those business terms for you.
- English: Write a redemption promise: one credit reserves one eligible seat, subject to the written booking terms. Decide cancellations, expiry, refunds, support and what happens if the club closes. The token protocol does not write or enforce those business terms for you.
- Current translation: Schreib ein Einlöseversprechen: Ein Credit reserviert einen dafür vorgesehenen Platz gemäß den schriftlichen Buchungsbedingungen. Lege Regeln für Stornierungen, Ablauf, Erstattungen, Support und den Fall fest, dass der Club schließt. Das Token-Protokoll formuliert diese Geschäftsbedingungen nicht für dich und setzt sie auch nicht durch.
- Approve:
- Correction:
- Reviewer:
- Date:

### 5.38 `write-down-the-problem-intended-user.45e28e9c`

- Risk tier: Reserves and fees
- Page: Project launch (/xrpl/builders/project-launch-basics.html)
- Heading on that page: Publish a project contract
- Purpose: This sentence is about XRP an account must keep, or about a fee.
- What the reader must understand: The teaching example is a 1 $XRP base reserve plus 0.2 $XRP for each qualifying owned object. The usual transaction fee is destroyed. It is not paid to validators. Live reserves can change by fee voting, so software should query the network. The English wording to preserve is: Write down the problem, intended user and smallest useful outcome. Publish exact asset identities, account roles, remaining issuer authority, product fees and network costs. Distinguish a prototype, a test-network rehearsal and a working Mainnet feature. Avoid promising profit, permanent availability or a security guarantee you cannot establish.
- English: Write down the problem, intended user and smallest useful outcome. Publish exact asset identities, account roles, remaining issuer authority, product fees and network costs. Distinguish a prototype, a test-network rehearsal and a working Mainnet feature. Avoid promising profit, permanent availability or a security guarantee you cannot establish.
- Current translation: Schreib das Problem, die beabsichtigten Nutzer und das kleinste nützliche Ergebnis auf. Veröffentliche genaue Asset-Identitäten, Kontorollen, verbleibende Emittentenbefugnis, Produktgebühren und Netzwerkkosten. Unterscheide einen Prototyp, eine Probe im Testnetzwerk und eine funktionierende Mainnet-Funktion. Versprich keinen Gewinn, keine dauerhafte Verfügbarkeit und keine Sicherheitsgarantie, die du nicht belegen kannst.
- Approve:
- Correction:
- Reviewer:
- Date:

### 5.39 `xrp-that-must-remain-available-to-su.dfbf0556`

- Risk tier: Reserves and fees
- Page: Trust lines lesson (/xrpl/builders/trust-lines.html)
- Heading on that page: Words you will use
- Purpose: This sentence is about XRP an account must keep, or about a fee.
- What the reader must understand: The teaching example is a 1 $XRP base reserve plus 0.2 $XRP for each qualifying owned object. The usual transaction fee is destroyed. It is not paid to validators. Live reserves can change by fee voting, so software should query the network. The English wording to preserve is: XRP that must remain available to support an account and relevant ledger objects; it is different from a transaction fee.
- English: XRP that must remain available to support an account and relevant ledger objects; it is different from a transaction fee.
- Current translation: XRP, das verfügbar bleiben muss, um ein Konto und relevante Ledger-Objekte zu tragen; es ist etwas anderes als eine Transaktionsgebühr.
- Approve:
- Correction:
- Reviewer:
- Date:

## 6. DEX and AMM

This sentence is about exchanging tokens, including slippage and the offer fields.

What the reader must understand for this whole section: A trade can move the price. Slippage is that movement. TakerGets and TakerPays name the two sides of an offer. Neither field is a guarantee of a future price.

### 6.1 `amms-and-slippage.da4418e3`

- Risk tier: DEX and AMM
- Page: Usage (/xrpl/usage.html)
- Heading on that page: AMMs and slippage
- Purpose: This sentence is about exchanging tokens, including slippage and the offer fields.
- What the reader must understand: A trade can move the price. Slippage is that movement. TakerGets and TakerPays name the two sides of an offer. Neither field is a guarantee of a future price. The English wording to preserve is: AMMs and slippage
- English: AMMs and slippage
- Current translation: AMMs und Slippage
- Approve:
- Correction:
- Reviewer:
- Date:

### 6.2 `an-amm-holds-two-assets-in-a-pool-an.45dadf03`

- Risk tier: DEX and AMM
- Page: Usage (/xrpl/usage.html)
- Heading on that page: AMMs and slippage
- Purpose: This sentence is about exchanging tokens, including slippage and the offer fields.
- What the reader must understand: A trade can move the price. Slippage is that movement. TakerGets and TakerPays name the two sides of an offer. Neither field is a guarantee of a future price. The English wording to preserve is: An AMM holds two assets in a pool and prices swaps from pool balances.
- English: An AMM holds two assets in a pool and prices swaps from pool balances.
- Current translation: Ein AMM hält zwei Assets in einem Pool und bepreist Swaps aus den Poolsalden.
- Approve:
- Correction:
- Reviewer:
- Date:

### 6.3 `dex-amm.22b33553`

- Risk tier: DEX and AMM
- Page: Definitions (/xrpl/definitions.html)
- Heading on that page: Understand the system.
- Purpose: This sentence is about exchanging tokens, including slippage and the offer fields.
- What the reader must understand: A trade can move the price. Slippage is that movement. TakerGets and TakerPays name the two sides of an offer. Neither field is a guarantee of a future price. The English wording to preserve is: DEX + AMM
- English: DEX + AMM
- Current translation: (same as the English) DEX + AMM
- Approve:
- Correction:
- Reviewer:
- Date:

### 6.4 `dex-offers-and-amms.93651ac8`

- Risk tier: DEX and AMM
- Page: Definitions (/xrpl/definitions.html)
- Heading on that page: DEX, offers, and AMMs
- Purpose: This sentence is about exchanging tokens, including slippage and the offer fields.
- What the reader must understand: A trade can move the price. Slippage is that movement. TakerGets and TakerPays name the two sides of an offer. Neither field is a guarantee of a future price. The English wording to preserve is: DEX, offers, and AMMs
- English: DEX, offers, and AMMs
- Current translation: DEX, Offers und AMMs
- Approve:
- Correction:
- Reviewer:
- Date:

### 6.5 `meta.reality.description`

- Risk tier: DEX and AMM
- Page: Investing reality (/xrpl/investing-reality.html)
- Heading on that page: Investing Reality
- Purpose: This sentence is about exchanging tokens, including slippage and the offer fields.
- What the reader must understand: A trade can move the price. Slippage is that movement. TakerGets and TakerPays name the two sides of an offer. Neither field is a guarantee of a future price. The English wording to preserve is: Price, liquidity, slippage, issuer controls, concentration, cycles, and the risk people ignore until it hurts.
- English: Price, liquidity, slippage, issuer controls, concentration, cycles, and the risk people ignore until it hurts.
- Current translation: Preis, Liquidität, Slippage, Emittentenkontrollen, Konzentration, Zyklen und das Risiko, das Menschen ignorieren, bis es wehtut.
- Approve:
- Correction:
- Reviewer:
- Date:

### 6.6 `simple-slippage-visual.076d9ff0`

- Risk tier: DEX and AMM
- Page: Usage (/xrpl/usage.html)
- Heading on that page: Simple slippage visual
- Purpose: This sentence is about exchanging tokens, including slippage and the offer fields.
- What the reader must understand: A trade can move the price. Slippage is that movement. TakerGets and TakerPays name the two sides of an offer. Neither field is a guarantee of a future price. The English wording to preserve is: Simple slippage visual
- English: Simple slippage visual
- Current translation: Einfache Slippage-Darstellung
- Approve:
- Correction:
- Reviewer:
- Date:

### 6.7 `slippage-and-pool-depth.e68d4e14`

- Risk tier: DEX and AMM
- Page: Investing reality (/xrpl/investing-reality.html)
- Heading on that page: Slippage and pool depth
- Purpose: This sentence is about exchanging tokens, including slippage and the offer fields.
- What the reader must understand: A trade can move the price. Slippage is that movement. TakerGets and TakerPays name the two sides of an offer. Neither field is a guarantee of a future price. The English wording to preserve is: Slippage and pool depth
- English: Slippage and pool depth
- Current translation: Slippage und Pooltiefe
- Approve:
- Correction:
- Reviewer:
- Date:

### 6.8 `slippage.98bc091b`

- Risk tier: DEX and AMM
- Page: Definitions (/xrpl/definitions.html)
- Heading on that page: Slippage
- Purpose: This sentence is about exchanging tokens, including slippage and the offer fields.
- What the reader must understand: A trade can move the price. Slippage is that movement. TakerGets and TakerPays name the two sides of an offer. Neither field is a guarantee of a future price. The English wording to preserve is: Slippage
- English: Slippage
- Current translation: (same as the English) Slippage
- Approve:
- Correction:
- Reviewer:
- Date:

### 6.9 `xrpl-s-dex-uses-offers-to-exchange-o.3578c8fc`

- Risk tier: DEX and AMM
- Page: Usage (/xrpl/usage.html)
- Heading on that page: Order books and offers
- Purpose: This sentence is about exchanging tokens, including slippage and the offer fields.
- What the reader must understand: A trade can move the price. Slippage is that movement. TakerGets and TakerPays name the two sides of an offer. Neither field is a guarantee of a future price. The English wording to preserve is: XRPL’s DEX uses offers to exchange one asset for another.
- English: XRPL’s DEX uses offers to exchange one asset for another.
- Current translation: Der DEX von XRPL nutzt Offers, um ein Asset gegen ein anderes zu tauschen.
- Approve:
- Correction:
- Reviewer:
- Date:

## 7. NFTs

This sentence is about NFToken objects and what a holder or an issuer can change.

What the reader must understand for this whole section: An NFT on the ledger is an NFToken. The owner does not get to rewrite the issuer’s mint-time rules. A transfer fee is not a seed and not a trust line.

### 7.1 `a-listing-says-permanent-collectible.fc19f9eb`

- Risk tier: NFTs
- Page: NFT basics (/xrpl/builders/nft-basics.html)
- Heading on that page: Work through this example
- Purpose: This sentence is about NFToken objects and what a holder or an issuer can change.
- What the reader must understand: An NFT on the ledger is an NFToken. The owner does not get to rewrite the issuer’s mint-time rules. A transfer fee is not a seed and not a trust line. The English wording to preserve is: A listing says “permanent collectible.” The NFT is mutable, its image sits on an ordinary web server, and the seller shows a screenshot rather than the NFTokenID. Which claims remain unproven?
- English: A listing says “permanent collectible.” The NFT is mutable, its image sits on an ordinary web server, and the seller shows a screenshot rather than the NFTokenID. Which claims remain unproven?
- Current translation: Ein Inserat sagt „dauerhaftes Sammlerstück“. Das NFT ist veränderbar, sein Bild liegt auf einem gewöhnlichen Webserver, und die verkaufende Person zeigt einen Screenshot statt der NFTokenID. Welche Behauptungen bleiben unbelegt?
- Approve:
- Correction:
- Reviewer:
- Date:

### 7.2 `burn.b96d6af1`

- Risk tier: NFTs
- Page: Usage (/xrpl/usage.html)
- Heading on that page: Burn
- Purpose: This sentence is about NFToken objects and what a holder or an issuer can change.
- What the reader must understand: An NFT on the ledger is an NFToken. The owner does not get to rewrite the issuer’s mint-time rules. A transfer fee is not a seed and not a trust line. The English wording to preserve is: Burn
- English: Burn
- Current translation: (same as the English) Burn
- Approve:
- Correction:
- Reviewer:
- Date:

### 7.3 `check-burn-transfer-and-uri-mutation.fe95a3bd`

- Risk tier: NFTs
- Page: NFT basics (/xrpl/builders/nft-basics.html)
- Heading on that page: Work through this example
- Purpose: This sentence is about NFToken objects and what a holder or an issuer can change.
- What the reader must understand: An NFT on the ledger is an NFToken. The owner does not get to rewrite the issuer’s mint-time rules. A transfer fee is not a seed and not a trust line. The English wording to preserve is: Check burn, transfer and URI-mutation permissions; write down uncertainty rather than assuming defaults.
- English: Check burn, transfer and URI-mutation permissions; write down uncertainty rather than assuming defaults.
- Current translation: Prüfe die Berechtigungen für Burn, Übertragung und URI-Änderung; schreib Unsicherheit auf, statt Vorgaben anzunehmen.
- Approve:
- Correction:
- Reviewer:
- Date:

### 7.4 `choose-a-publicly-viewable-example-a.976801e6`

- Risk tier: NFTs
- Page: NFT basics (/xrpl/builders/nft-basics.html)
- Heading on that page: Work through this example
- Purpose: This sentence is about NFToken objects and what a holder or an issuer can change.
- What the reader must understand: An NFT on the ledger is an NFToken. The owner does not get to rewrite the issuer’s mint-time rules. A transfer fee is not a seed and not a trust line. The English wording to preserve is: Choose a publicly viewable example and locate its NFTokenID, issuer, owner and taxon without connecting a wallet.
- English: Choose a publicly viewable example and locate its NFTokenID, issuer, owner and taxon without connecting a wallet.
- Current translation: Wähl ein öffentlich einsehbares Beispiel und finde seine NFTokenID, den Emittenten, den Eigentümer und das Taxon, ohne eine Wallet zu verbinden.
- Approve:
- Correction:
- Reviewer:
- Date:

### 7.5 `choose-the-asset-model-on-paper-inte.54d58c47`

- Risk tier: NFTs
- Page: Create a token (/xrpl/builders/create-token.html)
- Heading on that page: Build the club-credit specification
- Purpose: This sentence is about NFToken objects and what a holder or an issuer can change.
- What the reader must understand: An NFT on the ledger is an NFToken. The owner does not get to rewrite the issuer’s mint-time rules. A transfer fee is not a seed and not a trust line. The English wording to preserve is: Choose the asset model on paper: interchangeable credits suggest a fungible token; one separately identifiable membership collectible suggests an NFT. Record classic trust-line token for this exercise. MPTs are another standard, not a different name for the same setup.
- English: Choose the asset model on paper: interchangeable credits suggest a fungible token; one separately identifiable membership collectible suggests an NFT. Record classic trust-line token for this exercise. MPTs are another standard, not a different name for the same setup.
- Current translation: Wähl das Asset-Modell auf Papier: austauschbare Credits sprechen für ein fungibles Token; ein getrennt identifizierbares Mitgliedschafts-Sammlerstück spricht für ein NFT. Notiere für diese Übung ein klassisches Trust-Line-Token. MPTs sind ein anderer Standard, kein anderer Name für denselben Aufbau.
- Approve:
- Correction:
- Reviewer:
- Date:

### 7.6 `mint-burn-and-offer.04456e16`

- Risk tier: NFTs
- Page: NFT basics (/xrpl/builders/nft-basics.html)
- Heading on that page: Words you will use
- Purpose: This sentence is about NFToken objects and what a holder or an issuer can change.
- What the reader must understand: An NFT on the ledger is an NFToken. The owner does not get to rewrite the issuer’s mint-time rules. A transfer fee is not a seed and not a trust line. The English wording to preserve is: Mint, burn and offer
- English: Mint, burn and offer
- Current translation: Mint, Burn und Offer
- Approve:
- Correction:
- Reviewer:
- Date:

### 7.7 `mint-creates-the-nft-burn-destroys-i.a7c1145f`

- Risk tier: NFTs
- Page: NFT basics (/xrpl/builders/nft-basics.html)
- Heading on that page: Words you will use
- Purpose: This sentence is about NFToken objects and what a holder or an issuer can change.
- What the reader must understand: An NFT on the ledger is an NFToken. The owner does not get to rewrite the issuer’s mint-time rules. A transfer fee is not a seed and not a trust line. The English wording to preserve is: Mint creates the NFT; burn destroys its ledger token; an offer proposes an exchange and can remain unaccepted.
- English: Mint creates the NFT; burn destroys its ledger token; an offer proposes an exchange and can remain unaccepted.
- Current translation: Mint erzeugt das NFT; Burn zerstört sein Ledger-Token; ein Offer schlägt einen Tausch vor und kann unangenommen bleiben.
- Approve:
- Correction:
- Reviewer:
- Date:

### 7.8 `nftokenmint-sets-important-flags-tra.4a3171c3`

- Risk tier: NFTs
- Page: NFT basics (/xrpl/builders/nft-basics.html)
- Heading on that page: Check the mint choices
- Purpose: This sentence is about NFToken objects and what a holder or an issuer can change.
- What the reader must understand: An NFT on the ledger is an NFToken. The owner does not get to rewrite the issuer’s mint-time rules. A transfer fee is not a seed and not a trust line. The English wording to preserve is: NFTokenMint sets important flags. Transferable allows transfers between ordinary holders; without it, issuer-related transfers have special restrictions. Burnable gives the issuer or its authorized party burn authority; owners can burn their own NFTs. A mutable NFT can have its URI updated by the issuer or authorized minter through NFTokenModify. Do not assume every NFT’s metadata pointer is fixed.
- English: NFTokenMint sets important flags. Transferable allows transfers between ordinary holders; without it, issuer-related transfers have special restrictions. Burnable gives the issuer or its authorized party burn authority; owners can burn their own NFTs. A mutable NFT can have its URI updated by the issuer or authorized minter through NFTokenModify. Do not assume every NFT’s metadata pointer is fixed.
- Current translation: NFTokenMint setzt wichtige Flags. Transferable erlaubt Übertragungen zwischen gewöhnlichen Inhabern; ohne dieses Flag haben Übertragungen im Zusammenhang mit dem Emittenten besondere Beschränkungen. Burnable gibt dem Emittenten oder seiner autorisierten Stelle die Burn-Befugnis; Eigentümer können ihre eigenen NFTs per Burn entfernen. Bei einem veränderbaren NFT kann der Emittent oder der autorisierte Minter die URI über NFTokenModify aktualisieren. Nimm nicht an, der Metadatenzeiger jedes NFT sei fest.
- Approve:
- Correction:
- Reviewer:
- Date:

### 7.9 `nftokenmodify-authority-is-separate.989d0e2a`

- Risk tier: NFTs
- Page: NFT basics (/xrpl/builders/nft-basics.html)
- Heading on that page: The metadata URL fails. What can you conclude?
- Purpose: This sentence is about NFToken objects and what a holder or an issuer can change.
- What the reader must understand: An NFT on the ledger is an NFToken. The owner does not get to rewrite the issuer’s mint-time rules. A transfer fee is not a seed and not a trust line. The English wording to preserve is: NFTokenModify authority is separate from ordinary ownership.
- English: NFTokenModify authority is separate from ordinary ownership.
- Current translation: Die NFTokenModify-Befugnis ist vom gewöhnlichen Eigentum getrennt.
- Approve:
- Correction:
- Reviewer:
- Date:

### 7.10 `nfts-move-through-mint-offer-accept.c0ce1be3`

- Risk tier: NFTs
- Page: Usage (/xrpl/usage.html)
- Heading on that page: Using XRPL NFTs
- Purpose: This sentence is about NFToken objects and what a holder or an issuer can change.
- What the reader must understand: An NFT on the ledger is an NFToken. The owner does not get to rewrite the issuer’s mint-time rules. A transfer fee is not a seed and not a trust line. The English wording to preserve is: NFTs move through mint, offer, accept, transfer, and burn transactions.
- English: NFTs move through mint, offer, accept, transfer, and burn transactions.
- Current translation: NFTs bewegen sich durch Transaktionen für Mint, Offer, Annahme, Übertragung und Burn.
- Approve:
- Correction:
- Reviewer:
- Date:

### 7.11 `ownership-alone-is-not-editing-permi.008cb31b`

- Risk tier: NFTs
- Page: NFT basics (/xrpl/builders/nft-basics.html)
- Heading on that page: The owner cannot change the URI
- Purpose: This sentence is about NFToken objects and what a holder or an issuer can change.
- What the reader must understand: An NFT on the ledger is an NFToken. The owner does not get to rewrite the issuer’s mint-time rules. A transfer fee is not a seed and not a trust line. The English wording to preserve is: Ownership alone is not editing permission. For a mutable NFT, NFTokenModify is limited to the issuer or authorized minter; network amendment and wallet support also matter.
- English: Ownership alone is not editing permission. For a mutable NFT, NFTokenModify is limited to the issuer or authorized minter; network amendment and wallet support also matter.
- Current translation: Eigentum allein ist keine Bearbeitungsberechtigung. Bei einem veränderbaren NFT ist NFTokenModify auf den Emittenten oder den autorisierten Minter beschränkt; Amendment des Netzwerks und Wallet-Unterstützung zählen ebenfalls.
- Approve:
- Correction:
- Reviewer:
- Date:

### 7.12 `record-the-network-nftokenid-issuer.20050e5d`

- Risk tier: NFTs
- Page: NFT basics (/xrpl/builders/nft-basics.html)
- Heading on that page: Inspect the record
- Purpose: This sentence is about NFToken objects and what a holder or an issuer can change.
- What the reader must understand: An NFT on the ledger is an NFToken. The owner does not get to rewrite the issuer’s mint-time rules. A transfer fee is not a seed and not a trust line. The English wording to preserve is: Record the network, NFTokenID, issuer, current owner and taxon. A taxon groups related NFTs from an issuer; it is not proof of rarity or a promise that a collection is finished. Ownership and minting are different roles.
- English: Record the network, NFTokenID, issuer, current owner and taxon. A taxon groups related NFTs from an issuer; it is not proof of rarity or a promise that a collection is finished. Ownership and minting are different roles.
- Current translation: Notiere das Netzwerk, die NFTokenID, den Emittenten, den aktuellen Eigentümer und das Taxon. Ein Taxon gruppiert verwandte NFTs eines Emittenten; es ist kein Beweis für Seltenheit und kein Versprechen, dass eine Sammlung abgeschlossen ist. Eigentum und Minting sind verschiedene Rollen.
- Approve:
- Correction:
- Reviewer:
- Date:

### 7.13 `separate-a-balance-restriction-from.9ab9e330`

- Risk tier: NFTs
- Page: Issuer control (/xrpl/builders/issuer-control.html)
- Heading on that page: Freeze is described as destroying tokens
- Purpose: This sentence is about NFToken objects and what a holder or an issuer can change.
- What the reader must understand: An NFT on the ledger is an NFToken. The owner does not get to rewrite the issuer’s mint-time rules. A transfer fee is not a seed and not a trust line. The English wording to preserve is: Separate a balance restriction from clawback or NFT burning. Ask for the exact asset standard and control being used.
- English: Separate a balance restriction from clawback or NFT burning. Ask for the exact asset standard and control being used.
- Current translation: Trenn eine Saldobeschränkung von Clawback oder NFT-Burn. Frag nach dem genauen Asset-Standard und der Kontrolle, die genutzt wird.
- Approve:
- Correction:
- Reviewer:
- Date:

### 7.14 `settings-that-can-control-whether-th.33debda7`

- Risk tier: NFTs
- Page: Definitions (/xrpl/definitions.html)
- Heading on that page: Flags
- Purpose: This sentence is about NFToken objects and what a holder or an issuer can change.
- What the reader must understand: An NFT on the ledger is an NFToken. The owner does not get to rewrite the issuer’s mint-time rules. A transfer fee is not a seed and not a trust line. The English wording to preserve is: Settings that can control whether the NFT is transferable and whether the issuer can burn it.
- English: Settings that can control whether the NFT is transferable and whether the issuer can burn it.
- Current translation: Einstellungen, die steuern können, ob das NFT übertragbar ist und ob der Emittent es per Burn entfernen kann.
- Approve:
- Correction:
- Reviewer:
- Date:

### 7.15 `the-club-calls-this-collectible-perm.688a760e`

- Risk tier: NFTs
- Page: NFT basics (/xrpl/builders/nft-basics.html)
- Heading on that page: Inspect the club membership collectible
- Purpose: This sentence is about NFToken objects and what a holder or an issuer can change.
- What the reader must understand: An NFT on the ledger is an NFToken. The owner does not get to rewrite the issuer’s mint-time rules. A transfer fee is not a seed and not a trust line. The English wording to preserve is: The club calls this collectible permanent, but the sample explicitly permits URI changes and issuer-authorized burning. Rewrite the claim as: a transferable collectible with disclosed issuer controls and externally hosted content. State the preservation plan and license separately. A clearer promise is more useful than a permanence badge.
- English: The club calls this collectible permanent, but the sample explicitly permits URI changes and issuer-authorized burning. Rewrite the claim as: a transferable collectible with disclosed issuer controls and externally hosted content. State the preservation plan and license separately. A clearer promise is more useful than a permanence badge.
- Current translation: Der Club nennt dieses Sammlerstück dauerhaft, aber das Beispiel erlaubt ausdrücklich URI-Änderungen und vom Emittenten autorisierten Burn. Formuliere die Behauptung um: ein übertragbares Sammlerstück mit offengelegten Emittentenkontrollen und extern gehostetem Inhalt. Nenn den Erhaltungsplan und die Lizenz getrennt. Ein klareres Versprechen ist nützlicher als ein Dauerhaftigkeitsabzeichen.
- Approve:
- Correction:
- Reviewer:
- Date:

### 7.16 `the-screenshot-does-not-identify-the.90d66079`

- Risk tier: NFTs
- Page: NFT basics (/xrpl/builders/nft-basics.html)
- Heading on that page: Work through this example
- Purpose: This sentence is about NFToken objects and what a holder or an issuer can change.
- What the reader must understand: An NFT on the ledger is an NFToken. The owner does not get to rewrite the issuer’s mint-time rules. A transfer fee is not a seed and not a trust line. The English wording to preserve is: The screenshot does not identify the NFT. Obtain its network and NFTokenID, inspect issuer and owner, then inspect flags and URI. Mutable metadata and external hosting require a disclosure and preservation plan. Ledger ownership does not automatically transfer copyright or prove permanent image availability.
- English: The screenshot does not identify the NFT. Obtain its network and NFTokenID, inspect issuer and owner, then inspect flags and URI. Mutable metadata and external hosting require a disclosure and preservation plan. Ledger ownership does not automatically transfer copyright or prove permanent image availability.
- Current translation: Der Screenshot identifiziert das NFT nicht. Beschaffe sein Netzwerk und seine NFTokenID, prüfe Emittent und Eigentümer und prüfe dann Flags und URI. Veränderbare Metadaten und externes Hosting brauchen eine Offenlegung und einen Erhaltungsplan. Eigentum im Ledger überträgt nicht automatisch das Urheberrecht und beweist keine dauerhafte Verfügbarkeit des Bildes.
- Approve:
- Correction:
- Reviewer:
- Date:

## 8. Other security and finance

This sentence is other security or finance teaching, such as freeze, blackhole, phishing, Xaman, or MPTs.

What the reader must understand for this whole section: Keep the English warning. Freeze is not destruction. A blackhole is not proof a project is safe. MPTs are a different standard from trust-line tokens. A false quiz answer must stay false.

### 8.1 `a-member-sees-two-assets-with-the-sa.a08c1393`

- Risk tier: Other security and finance
- Page: Create a token (/xrpl/builders/create-token.html)
- Heading on that page: Build the club-credit specification
- Purpose: This sentence is other security or finance teaching, such as freeze, blackhole, phishing, Xaman, or MPTs.
- What the reader must understand: Keep the English warning. Freeze is not destruction. A blackhole is not proof a project is safe. MPTs are a different standard from trust-line tokens. A false quiz answer must stay false. The English wording to preserve is: A member sees two assets with the same club logo. One is from Issuer A and one from Issuer C. The correct decision is to compare complete identities against the club specification, not select the nicer image. Even the matching asset still needs the separate redemption and authority review.
- English: A member sees two assets with the same club logo. One is from Issuer A and one from Issuer C. The correct decision is to compare complete identities against the club specification, not select the nicer image. Even the matching asset still needs the separate redemption and authority review.
- Current translation: Ein Mitglied sieht zwei Assets mit demselben Club-Logo. Eines stammt von Issuer A und eines von Issuer C. Die richtige Entscheidung ist, die vollständigen Identitäten mit der Club-Spezifikation zu vergleichen, nicht das hübschere Bild zu wählen. Auch das passende Asset braucht noch die separate Prüfung von Einlösung und Befugnis.
- Approve:
- Correction:
- Reviewer:
- Date:

### 8.2 `add-a-control-column-note-whether-is.b0a44ba6`

- Risk tier: Other security and finance
- Page: Trust lines lesson (/xrpl/builders/trust-lines.html)
- Heading on that page: Read a member account before changing anything
- Purpose: This sentence is other security or finance teaching, such as freeze, blackhole, phishing, Xaman, or MPTs.
- What the reader must understand: Keep the English warning. Freeze is not destruction. A blackhole is not proof a project is safe. MPTs are a different standard from trust-line tokens. A false quiz answer must stay false. The English wording to preserve is: Add a control column. Note whether issuer authorization is required and granted, whether freeze restrictions exist, and what the relevant ripple settings are. Unknown is a valid result: it means you need evidence, not a guessed default.
- English: Add a control column. Note whether issuer authorization is required and granted, whether freeze restrictions exist, and what the relevant ripple settings are. Unknown is a valid result: it means you need evidence, not a guessed default.
- Current translation: Ergänze eine Spalte für Kontrollen. Notiere, ob eine Emittenten-Autorisierung nötig und erteilt ist, ob Freeze-Beschränkungen bestehen und wie die betreffenden Ripple-Einstellungen lauten. Unbekannt ist ein gültiges Ergebnis: Es bedeutet, dass du Nachweise brauchst, keine geratene Vorgabe.
- Approve:
- Correction:
- Reviewer:
- Date:

### 8.3 `authorization-may-be-required-by-an.060da144`

- Risk tier: Other security and finance
- Page: Trust lines lesson (/xrpl/builders/trust-lines.html)
- Heading on that page: Understand the controls
- Purpose: This sentence is other security or finance teaching, such as freeze, blackhole, phishing, Xaman, or MPTs.
- What the reader must understand: Keep the English warning. Freeze is not destruction. A blackhole is not proof a project is safe. MPTs are a different standard from trust-line tokens. A false quiz answer must stay false. The English wording to preserve is: Authorization may be required by an issuer before a holder can hold its currency. Freeze settings can restrict the asset. Rippling can move value across compatible trust-line relationships as part of payments. No Ripple settings affect those paths; they do not make a token safe or remove issuer risk. Review both account and line settings before changing defaults.
- English: Authorization may be required by an issuer before a holder can hold its currency. Freeze settings can restrict the asset. Rippling can move value across compatible trust-line relationships as part of payments. No Ripple settings affect those paths; they do not make a token safe or remove issuer risk. Review both account and line settings before changing defaults.
- Current translation: Ein Emittent kann eine Autorisierung verlangen, bevor ein Inhaber seine Währung halten darf. Freeze-Einstellungen können das Asset beschränken. Rippling kann Wert über passende Trust-Line-Beziehungen als Teil von Zahlungen bewegen. Einstellungen für No Ripple beeinflussen diese Pfade; sie machen einen Token nicht sicher und nehmen das Emittentenrisiko nicht weg. Prüfe Konto- und Linien-Einstellungen, bevor du Vorgaben änderst.
- Approve:
- Correction:
- Reviewer:
- Date:

### 8.4 `blackhole-status.60b409e6`

- Risk tier: Other security and finance
- Page: Investing reality (/xrpl/investing-reality.html)
- Heading on that page: Blackhole status
- Purpose: This sentence is other security or finance teaching, such as freeze, blackhole, phishing, Xaman, or MPTs.
- What the reader must understand: Keep the English warning. Freeze is not destruction. A blackhole is not proof a project is safe. MPTs are a different standard from trust-line tokens. A false quiz answer must stay false. The English wording to preserve is: Blackhole status
- English: Blackhole status
- Current translation: Blackhole-Status
- Approve:
- Correction:
- Reviewer:
- Date:

### 8.5 `bring-the-project-identity-and-autho.48f611b5`

- Risk tier: Other security and finance
- Page: Xaman flows (/xrpl/builders/xaman-flows.html)
- Heading on that page: Before you start
- Purpose: This sentence is other security or finance teaching, such as freeze, blackhole, phishing, Xaman, or MPTs.
- What the reader must understand: Keep the English warning. Freeze is not destruction. A blackhole is not proof a project is safe. MPTs are a different standard from trust-line tokens. A false quiz answer must stay false. The English wording to preserve is: Bring the project identity and authority notes. You do not need a wallet for this lesson. If you later implement an integration, use a separate test environment and the current official Xaman documentation.
- English: Bring the project identity and authority notes. You do not need a wallet for this lesson. If you later implement an integration, use a separate test environment and the current official Xaman documentation.
- Current translation: Bring die Notizen zu Projektidentität und Befugnis mit. Für diese Lektion brauchst du keine Wallet. Wenn du später eine Anbindung umsetzt, nutze eine getrennte Testumgebung und die aktuelle offizielle Xaman-Dokumentation.
- Approve:
- Correction:
- Reviewer:
- Date:

### 8.6 `can-an-issuer-freeze-native-xrp-usin.99e811b3`

- Risk tier: Other security and finance
- Page: Issuer control (/xrpl/builders/issuer-control.html)
- Heading on that page: Can an issuer freeze native XRP using its token freeze controls?
- Purpose: This sentence is other security or finance teaching, such as freeze, blackhole, phishing, Xaman, or MPTs.
- What the reader must understand: Keep the English warning. Freeze is not destruction. A blackhole is not proof a project is safe. MPTs are a different standard from trust-line tokens. A false quiz answer must stay false. The English wording to preserve is: Can an issuer freeze native XRP using its token freeze controls?
- English: Can an issuer freeze native XRP using its token freeze controls?
- Current translation: Kann ein Emittent natives XRP mit seinen Token-Freeze-Kontrollen einfrieren?
- Approve:
- Correction:
- Reviewer:
- Date:

### 8.7 `creation-does-not-create-buyers-a-ma.30fb7d14`

- Risk tier: Other security and finance
- Page: Create a token (/xrpl/builders/create-token.html)
- Heading on that page: A token exists but nobody can sell it
- Purpose: This sentence is other security or finance teaching, such as freeze, blackhole, phishing, Xaman, or MPTs.
- What the reader must understand: Keep the English warning. Freeze is not destruction. A blackhole is not proof a project is safe. MPTs are a different standard from trust-line tokens. A false quiz answer must stay false. The English wording to preserve is: Creation does not create buyers, a market price or redemption funds. Inspect actual market depth and published redemption terms; never describe an unsupported price as guaranteed value.
- English: Creation does not create buyers, a market price or redemption funds. Inspect actual market depth and published redemption terms; never describe an unsupported price as guaranteed value.
- Current translation: Das Erstellen erzeugt keine Käufer, keinen Marktpreis und keine Einlösemittel. Prüfe die tatsächliche Markttiefe und die veröffentlichten Einlösebedingungen; beschreibe einen ungedeckten Preis niemals als garantierten Wert.
- Approve:
- Correction:
- Reviewer:
- Date:

### 8.8 `does-freezing-an-issued-token-mean-t.021d0f68`

- Risk tier: Other security and finance
- Page: Issuer control (/xrpl/builders/issuer-control.html)
- Heading on that page: Does freezing an issued token mean the issuer can freeze the holder native XRP?
- Purpose: This sentence is other security or finance teaching, such as freeze, blackhole, phishing, Xaman, or MPTs.
- What the reader must understand: Keep the English warning. Freeze is not destruction. A blackhole is not proof a project is safe. MPTs are a different standard from trust-line tokens. A false quiz answer must stay false. The English wording to preserve is: Does freezing an issued token mean the issuer can freeze the holder native XRP?
- English: Does freezing an issued token mean the issuer can freeze the holder native XRP?
- Current translation: Bedeutet das Einfrieren eines emittierten Tokens, dass der Emittent das native XRP des Inhabers einfrieren kann?
- Approve:
- Correction:
- Reviewer:
- Date:

### 8.9 `explain-your-answer-without-looking.0a3835d8`

- Risk tier: Other security and finance
- Page: Create a token; NFT basics; Trust lines lesson; Issuer control; Xaman flows; Project launch (/xrpl/builders/create-token.html; /xrpl/builders/nft-basics.html; /xrpl/builders/trust-lines.html; /xrpl/builders/issuer-control.html; /xrpl/builders/xaman-flows.html; /xrpl/builders/project-launch-basics.html)
- Heading on that page: What to keep before moving on; What to keep before moving on; What to keep before moving on; What to keep before moving on; What to keep before moving on; What to keep before moving on
- Purpose: This sentence is other security or finance teaching, such as freeze, blackhole, phishing, Xaman, or MPTs.
- What the reader must understand: Keep the English warning. Freeze is not destruction. A blackhole is not proof a project is safe. MPTs are a different standard from trust-line tokens. A false quiz answer must stay false. The English wording to preserve is: Explain your answer without looking at the worked example, then compare. If you guessed, revisit the relevant section. The checkboxes and quiz feedback stay on this page only; keep your project notes yourself.
- English: Explain your answer without looking at the worked example, then compare. If you guessed, revisit the relevant section. The checkboxes and quiz feedback stay on this page only; keep your project notes yourself.
- Current translation: Erkläre deine Antwort, ohne das ausgearbeitete Beispiel anzusehen, und vergleiche danach. Wenn du geraten hast, geh den betreffenden Abschnitt noch einmal durch. Die Markierungen und das Quiz-Feedback bleiben nur auf dieser Seite; deine Projektnotizen behältst du selbst.
- Approve:
- Correction:
- Reviewer:
- Date:

### 8.10 `follow-a-fictional-neighborhood-club.3379ae6e`

- Risk tier: Other security and finance
- Page: Builders hub (/xrpl/builders/)
- Heading on that page: Start with a project, finish with evidence
- Purpose: This sentence is other security or finance teaching, such as freeze, blackhole, phishing, Xaman, or MPTs.
- What the reader must understand: Keep the English warning. Freeze is not destruction. A blackhole is not proof a project is safe. MPTs are a different standard from trust-line tokens. A false quiz answer must stay false. The English wording to preserve is: Follow a fictional neighborhood club from workshop credits to a collectible and a booking flow. Each lesson contains definitions, a guided paper worksheet, a worked decision, common mistakes and questions with explanations. Read the lesson, attempt the worksheet before checking the answer, and keep the resulting page of notes. There is no account, score certificate or saved learning profile.
- English: Follow a fictional neighborhood club from workshop credits to a collectible and a booking flow. Each lesson contains definitions, a guided paper worksheet, a worked decision, common mistakes and questions with explanations. Read the lesson, attempt the worksheet before checking the answer, and keep the resulting page of notes. There is no account, score certificate or saved learning profile.
- Current translation: Begleite einen fiktiven Nachbarschaftsclub von Workshop-Credits über ein Sammlerstück bis zu einem Buchungsablauf. Jede Lektion enthält Definitionen, ein geführtes Papier-Arbeitsblatt, eine ausgearbeitete Entscheidung, häufige Fehler und Fragen mit Erklärungen. Lies die Lektion, versuch das Arbeitsblatt, bevor du die Antwort prüfst, und behalte die entstehende Notizseite. Es gibt kein Konto, kein Punktezeugnis und kein gespeichertes Lernprofil.
- Approve:
- Correction:
- Reviewer:
- Date:

### 8.11 `freeze-controls.8523f760`

- Risk tier: Other security and finance
- Page: Investing reality (/xrpl/investing-reality.html)
- Heading on that page: Freeze controls
- Purpose: This sentence is other security or finance teaching, such as freeze, blackhole, phishing, Xaman, or MPTs.
- What the reader must understand: Keep the English warning. Freeze is not destruction. A blackhole is not proof a project is safe. MPTs are a different standard from trust-line tokens. A false quiz answer must stay false. The English wording to preserve is: Freeze controls
- English: Freeze controls
- Current translation: Freeze-Kontrollen
- Approve:
- Correction:
- Reviewer:
- Date:

### 8.12 `freeze-is-described-as-destroying-to.9896b013`

- Risk tier: Other security and finance
- Page: Issuer control (/xrpl/builders/issuer-control.html)
- Heading on that page: Freeze is described as destroying tokens
- Purpose: This sentence is other security or finance teaching, such as freeze, blackhole, phishing, Xaman, or MPTs.
- What the reader must understand: Keep the English warning. Freeze is not destruction. A blackhole is not proof a project is safe. MPTs are a different standard from trust-line tokens. A false quiz answer must stay false. The English wording to preserve is: Freeze is described as destroying tokens
- English: Freeze is described as destroying tokens
- Current translation: Freeze wird als Zerstören von Token beschrieben
- Approve:
- Correction:
- Reviewer:
- Date:

### 8.13 `freeze-types-and-no-freeze.7a6c33a3`

- Risk tier: Other security and finance
- Page: Issuer control (/xrpl/builders/issuer-control.html)
- Heading on that page: Go deeper with official sources
- Purpose: This sentence is other security or finance teaching, such as freeze, blackhole, phishing, Xaman, or MPTs.
- What the reader must understand: Keep the English warning. Freeze is not destruction. A blackhole is not proof a project is safe. MPTs are a different standard from trust-line tokens. A false quiz answer must stay false. The English wording to preserve is: Freeze types and No Freeze
- English: Freeze types and No Freeze
- Current translation: Freeze-Arten und No Freeze
- Approve:
- Correction:
- Reviewer:
- Date:

### 8.14 `freeze-versus-clawback.0c521a9b`

- Risk tier: Other security and finance
- Page: Issuer control (/xrpl/builders/issuer-control.html)
- Heading on that page: Words you will use
- Purpose: This sentence is other security or finance teaching, such as freeze, blackhole, phishing, Xaman, or MPTs.
- What the reader must understand: Keep the English warning. Freeze is not destruction. A blackhole is not proof a project is safe. MPTs are a different standard from trust-line tokens. A false quiz answer must stay false. The English wording to preserve is: Freeze versus clawback
- English: Freeze versus clawback
- Current translation: Freeze gegenüber Clawback
- Approve:
- Correction:
- Reviewer:
- Date:

### 8.15 `freeze.5a6b2d30`

- Risk tier: Other security and finance
- Page: Builders hub (/xrpl/builders/)
- Heading on that page: Freeze
- Purpose: This sentence is other security or finance teaching, such as freeze, blackhole, phishing, Xaman, or MPTs.
- What the reader must understand: Keep the English warning. Freeze is not destruction. A blackhole is not proof a project is safe. MPTs are a different standard from trust-line tokens. A false quiz answer must stay false. The English wording to preserve is: Freeze
- English: Freeze
- Current translation: (same as the English) Freeze
- Approve:
- Correction:
- Reviewer:
- Date:

### 8.16 `in-a-read-only-explorer-account-view.b057c38f`

- Risk tier: Other security and finance
- Page: Trust lines lesson (/xrpl/builders/trust-lines.html)
- Heading on that page: Optional: connect the worksheet to a public record
- Purpose: This sentence is other security or finance teaching, such as freeze, blackhole, phishing, Xaman, or MPTs.
- What the reader must understand: Keep the English warning. Freeze is not destruction. A blackhole is not proof a project is safe. MPTs are a different standard from trust-line tokens. A false quiz answer must stay false. The English wording to preserve is: In a read-only explorer account view, open the issued balances or trust-line section. Locate the precise currency and peer issuer, then compare balance, limit and any shown freeze/authorization/ripple fields. Identify whose perspective is displayed. If a field is missing from the interface, write not shown rather than assuming disabled. Your learning worksheet can stay fictional if no suitable record is available.
- English: In a read-only explorer account view, open the issued balances or trust-line section. Locate the precise currency and peer issuer, then compare balance, limit and any shown freeze/authorization/ripple fields. Identify whose perspective is displayed. If a field is missing from the interface, write not shown rather than assuming disabled. Your learning worksheet can stay fictional if no suitable record is available.
- Current translation: Öffne in einer nur lesbaren Explorer-Ansicht des Kontos den Bereich für emittierte Salden oder Trust Lines. Such die genaue Währung und den Emittenten auf der Gegenseite, dann vergleiche Saldo, Limit und angezeigte Felder für Freeze, Autorisierung und Ripple. Erkenn, wessen Perspektive angezeigt wird. Wenn ein Feld in der Oberfläche fehlt, schreib „nicht angezeigt“, statt deaktiviert anzunehmen. Dein Lernblatt kann fiktiv bleiben, wenn kein passender Datensatz verfügbar ist.
- Approve:
- Correction:
- Reviewer:
- Date:

### 8.17 `interactive-feedback-requires-javasc.047d8e72`

- Risk tier: Other security and finance
- Page: Create a token; NFT basics; Trust lines lesson; Issuer control; Xaman flows; Project launch (/xrpl/builders/create-token.html; /xrpl/builders/nft-basics.html; /xrpl/builders/trust-lines.html; /xrpl/builders/issuer-control.html; /xrpl/builders/xaman-flows.html; /xrpl/builders/project-launch-basics.html)
- Heading on that page: The club only needs an internal booking list. Must it issue a token?; You own a mutable NFT. Does ownership alone let you change its URI?; An explorer asks for a signature just to inspect a public trust line. Is that necessary for reading?; Does freezing an issued token mean the issuer can freeze the holder native XRP?; A bound SignIn succeeds. Has the booking been paid?; Can reverting a web page reverse a validated ledger transfer?
- Purpose: This sentence is other security or finance teaching, such as freeze, blackhole, phishing, Xaman, or MPTs.
- What the reader must understand: Keep the English warning. Freeze is not destruction. A blackhole is not proof a project is safe. MPTs are a different standard from trust-line tokens. A false quiz answer must stay false. The English wording to preserve is: Interactive feedback requires JavaScript. All lesson content and the worked answer above remain available.
- English: Interactive feedback requires JavaScript. All lesson content and the worked answer above remain available.
- Current translation: Interaktives Feedback braucht JavaScript. Der gesamte Lektionsinhalt und die ausgearbeitete Antwort oben bleiben verfügbar.
- Approve:
- Correction:
- Reviewer:
- Date:

### 8.18 `list-the-evidence-a-reviewer-needs-e.71edfb57`

- Risk tier: Other security and finance
- Page: Create a token (/xrpl/builders/create-token.html)
- Heading on that page: Build the club-credit specification
- Purpose: This sentence is other security or finance teaching, such as freeze, blackhole, phishing, Xaman, or MPTs.
- What the reader must understand: Keep the English warning. Freeze is not destruction. A blackhole is not proof a project is safe. MPTs are a different standard from trust-line tokens. A false quiz answer must stay false. The English wording to preserve is: List the evidence a reviewer needs: exact asset identity; who can issue or change controls; distribution records; redemption terms; any claimed cap mechanism; and what remains unknown. Use lesson 4 to complete the authority section instead of assuming the account cannot change.
- English: List the evidence a reviewer needs: exact asset identity; who can issue or change controls; distribution records; redemption terms; any claimed cap mechanism; and what remains unknown. Use lesson 4 to complete the authority section instead of assuming the account cannot change.
- Current translation: Liste die Nachweise, die eine prüfende Person braucht: die genaue Asset-Identität; wer ausgeben oder Kontrollen ändern kann; Verteilungsdatensätze; Einlösebedingungen; jeden behaupteten Mechanismus für eine Obergrenze; und was unbekannt bleibt. Nutze Lektion 4, um den Befugnisabschnitt zu vervollständigen, statt anzunehmen, das Konto könne sich nicht ändern.
- Approve:
- Correction:
- Reviewer:
- Date:

### 8.19 `list-token-controls-separately-from.1cffbef3`

- Risk tier: Other security and finance
- Page: Issuer control (/xrpl/builders/issuer-control.html)
- Heading on that page: Map who can act for the club
- Purpose: This sentence is other security or finance teaching, such as freeze, blackhole, phishing, Xaman, or MPTs.
- What the reader must understand: Keep the English warning. Freeze is not destruction. A blackhole is not proof a project is safe. MPTs are a different standard from trust-line tokens. A false quiz answer must stay false. The English wording to preserve is: List token controls separately from keys: required authorization, individual/deep/global freeze, No Freeze and clawback capability. Explain the effect on holders and the evidence you inspected. Do not translate a restriction on one token relationship into a restriction on XRP or every asset.
- English: List token controls separately from keys: required authorization, individual/deep/global freeze, No Freeze and clawback capability. Explain the effect on holders and the evidence you inspected. Do not translate a restriction on one token relationship into a restriction on XRP or every asset.
- Current translation: Liste Token-Kontrollen getrennt von Schlüsseln: nötige Autorisierung, Individual Freeze, Deep Freeze, Global Freeze, No Freeze und Clawback-Fähigkeit. Erkläre die Wirkung auf Inhaber und die Nachweise, die du geprüft hast. Mach aus einer Beschränkung einer Token-Beziehung keine Beschränkung von XRP oder von jedem Asset.
- Approve:
- Correction:
- Reviewer:
- Date:

### 8.20 `meta.xaman.title`

- Risk tier: Other security and finance
- Page: Xaman flows (/xrpl/builders/xaman-flows.html)
- Heading on that page: Xaman flows
- Purpose: This sentence is other security or finance teaching, such as freeze, blackhole, phishing, Xaman, or MPTs.
- What the reader must understand: Keep the English warning. Freeze is not destruction. A blackhole is not proof a project is safe. MPTs are a different standard from trust-line tokens. A false quiz answer must stay false. The English wording to preserve is: Xaman flows | Builders Hub | XRPL LAYMAN
- English: Xaman flows | Builders Hub | XRPL LAYMAN
- Current translation: Xaman-Abläufe | Entwicklerzentrum | XRPL LAYMAN
- Approve:
- Correction:
- Reviewer:
- Date:

### 8.21 `neb-s-public-page-describes-a-future.2da289c9`

- Risk tier: Other security and finance
- Page: Project launch (/xrpl/builders/project-launch-basics.html)
- Heading on that page: Keep building
- Purpose: This sentence is other security or finance teaching, such as freeze, blackhole, phishing, Xaman, or MPTs.
- What the reader must understand: Keep the English warning. Freeze is not destruction. A blackhole is not proof a project is safe. MPTs are a different standard from trust-line tokens. A false quiz answer must stay false. The English wording to preserve is: NEB’s public page describes a future trading system. Its preview is not evidence of live feeds or execution.
- English: NEB’s public page describes a future trading system. Its preview is not evidence of live feeds or execution.
- Current translation: Die öffentliche Seite von NEB beschreibt ein künftiges Handelssystem. Ihre Vorschau ist kein Nachweis für Live-Feeds oder Ausführung.
- Approve:
- Correction:
- Reviewer:
- Date:

### 8.22 `never-change-rippling-freeze-or-auth.5af57760`

- Risk tier: Other security and finance
- Page: Trust lines lesson (/xrpl/builders/trust-lines.html)
- Heading on that page: Work through this example
- Purpose: This sentence is other security or finance teaching, such as freeze, blackhole, phishing, Xaman, or MPTs.
- What the reader must understand: Keep the English warning. Freeze is not destruction. A blackhole is not proof a project is safe. MPTs are a different standard from trust-line tokens. A false quiz answer must stay false. The English wording to preserve is: Never change rippling, freeze or authorization flags just to clear a warning you do not understand. A successful TrustSet is a settings change, not a purchase or a safety endorsement.
- English: Never change rippling, freeze or authorization flags just to clear a warning you do not understand. A successful TrustSet is a settings change, not a purchase or a safety endorsement.
- Current translation: Ändere Flags für Rippling, Freeze oder Autorisierung niemals nur, um eine Warnung zu beseitigen, die du nicht verstehst. Ein erfolgreiches TrustSet ist eine Einstellungsänderung, kein Kauf und keine Sicherheitsempfehlung.
- Approve:
- Correction:
- Reviewer:
- Date:

### 8.23 `phishing-and-fake-connection-flows.27a92c45`

- Risk tier: Other security and finance
- Page: Safety (/xrpl/safety.html)
- Heading on that page: Phishing and fake connection flows
- Purpose: This sentence is other security or finance teaching, such as freeze, blackhole, phishing, Xaman, or MPTs.
- What the reader must understand: Keep the English warning. Freeze is not destruction. A blackhole is not proof a project is safe. MPTs are a different standard from trust-line tokens. A false quiz answer must stay false. The English wording to preserve is: Phishing and fake connection flows
- English: Phishing and fake connection flows
- Current translation: Phishing und gefälschte Verbindungsabläufe
- Approve:
- Correction:
- Reviewer:
- Date:

### 8.24 `redemption.843604af`

- Risk tier: Other security and finance
- Page: Investing reality; Create a token (/xrpl/investing-reality.html; /xrpl/builders/create-token.html)
- Heading on that page: Redemption; Words you will use
- Purpose: This sentence is other security or finance teaching, such as freeze, blackhole, phishing, Xaman, or MPTs.
- What the reader must understand: Keep the English warning. Freeze is not destruction. A blackhole is not proof a project is safe. MPTs are a different standard from trust-line tokens. A false quiz answer must stay false. The English wording to preserve is: Redemption
- English: Redemption
- Current translation: Einlösung
- Approve:
- Correction:
- Reviewer:
- Date:

### 8.25 `rehearse-an-uncertain-transaction-a.dd025fa6`

- Risk tier: Other security and finance
- Page: Project launch (/xrpl/builders/project-launch-basics.html)
- Heading on that page: Hold a tabletop launch review
- Purpose: This sentence is other security or finance teaching, such as freeze, blackhole, phishing, Xaman, or MPTs.
- What the reader must understand: Keep the English warning. Freeze is not destruction. A blackhole is not proof a project is safe. MPTs are a different standard from trust-line tokens. A false quiz answer must stay false. The English wording to preserve is: Rehearse an uncertain transaction: a hash exists but a lookup cannot find it. Keep the original intent and bounded expiry evidence. Ask whether the queried server has the required history and has passed the relevant ledger boundary before concluding non-inclusion. Do not issue a fresh payment merely because one lookup was empty.
- English: Rehearse an uncertain transaction: a hash exists but a lookup cannot find it. Keep the original intent and bounded expiry evidence. Ask whether the queried server has the required history and has passed the relevant ledger boundary before concluding non-inclusion. Do not issue a fresh payment merely because one lookup was empty.
- Current translation: Spiele den Fall einer Transaktion mit unklarem Ausgang durch: Ein Hash existiert, aber die Abfrage findet die Transaktion nicht. Bewahre die ursprüngliche Absicht und die Nachweise für die festgelegte Ablaufgrenze auf. Prüfe vor dem Schluss, dass die Transaktion nicht aufgenommen wurde, ob der abgefragte Server über die nötige Historie verfügt und die relevante Ledger-Grenze überschritten hat. Löse nicht bloß deshalb eine neue Zahlung aus, weil eine einzelne Abfrage keinen Treffer geliefert hat.
- Approve:
- Correction:
- Reviewer:
- Date:

### 8.26 `save-a-one-page-asset-specification.286034dc`

- Risk tier: Other security and finance
- Page: Create a token (/xrpl/builders/create-token.html)
- Heading on that page: What to keep before moving on
- Purpose: This sentence is other security or finance teaching, such as freeze, blackhole, phishing, Xaman, or MPTs.
- What the reader must understand: Keep the English warning. Freeze is not destruction. A blackhole is not proof a project is safe. MPTs are a different standard from trust-line tokens. A false quiz answer must stay false. The English wording to preserve is: Save a one-page asset specification with purpose, chosen standard, network, identity, redemption terms, supply calculation and open authority questions. In lesson 2 you will add a separate collectible; do not treat the credit and collectible as the same asset.
- English: Save a one-page asset specification with purpose, chosen standard, network, identity, redemption terms, supply calculation and open authority questions. In lesson 2 you will add a separate collectible; do not treat the credit and collectible as the same asset.
- Current translation: Speichere eine einseitige Asset-Spezifikation mit Zweck, gewähltem Standard, Netzwerk, Identität, Einlösebedingungen, Supply-Rechnung und offenen Befugnisfragen. In Lektion 2 ergänzt du ein separates Sammlerstück; behandle Credit und Sammlerstück nicht als dasselbe Asset.
- Approve:
- Correction:
- Reviewer:
- Date:

### 8.27 `scammers-can-trick-you-into-authoriz.82c7e021`

- Risk tier: Other security and finance
- Page: Safety (/xrpl/safety.html)
- Heading on that page: Phishing and fake connection flows
- Purpose: This sentence is other security or finance teaching, such as freeze, blackhole, phishing, Xaman, or MPTs.
- What the reader must understand: Keep the English warning. Freeze is not destruction. A blackhole is not proof a project is safe. MPTs are a different standard from trust-line tokens. A false quiz answer must stay false. The English wording to preserve is: Scammers can trick you into authorizing the transaction yourself.
- English: Scammers can trick you into authorizing the transaction yourself.
- Current translation: Betrüger können dich dazu bringen, die Transaktion selbst zu autorisieren.
- Approve:
- Correction:
- Reviewer:
- Date:

### 8.28 `think-of-xrpl-as-the-shared-database.0c61a794`

- Risk tier: Other security and finance
- Page: Definitions (/xrpl/definitions.html)
- Heading on that page: Final
- Purpose: This sentence is other security or finance teaching, such as freeze, blackhole, phishing, Xaman, or MPTs.
- What the reader must understand: Keep the English warning. Freeze is not destruction. A blackhole is not proof a project is safe. MPTs are a different standard from trust-line tokens. A false quiz answer must stay false. The English wording to preserve is: Think of XRPL as the shared database underneath the apps. Xaman, exchanges, explorers, games, and marketplaces are interfaces. The ledger’s the record they’re reading and writing to.
- English: Think of XRPL as the shared database underneath the apps. Xaman, exchanges, explorers, games, and marketplaces are interfaces. The ledger’s the record they’re reading and writing to.
- Current translation: Stell dir XRPL als die gemeinsame Datenbank unter den Apps vor. Xaman, Börsen, Explorer, Spiele und Marktplätze sind Oberflächen. Das Ledger ist der Datensatz, den sie lesen und in den sie schreiben.
- Approve:
- Correction:
- Reviewer:
- Date:

### 8.29 `this-lesson-follows-the-classic-trus.fc252c0f`

- Risk tier: Other security and finance
- Page: Create a token (/xrpl/builders/create-token.html)
- Heading on that page: Know what you are creating
- Purpose: This sentence is other security or finance teaching, such as freeze, blackhole, phishing, Xaman, or MPTs.
- What the reader must understand: Keep the English warning. Freeze is not destruction. A blackhole is not proof a project is safe. MPTs are a different standard from trust-line tokens. A false quiz answer must stay false. The English wording to preserve is: This lesson follows the classic trust-line token model. XRPL also has Multi-Purpose Tokens (MPTs), with different identifiers and capabilities. Choose the standard deliberately and check the intended network and wallet support before following a tutorial. These lessons do not create either kind of token.
- English: This lesson follows the classic trust-line token model. XRPL also has Multi-Purpose Tokens (MPTs), with different identifiers and capabilities. Choose the standard deliberately and check the intended network and wallet support before following a tutorial. These lessons do not create either kind of token.
- Current translation: Diese Lektion folgt dem klassischen Trust-Line-Token-Modell. XRPL hat auch Multi-Purpose Tokens (MPTs), mit anderen Kennungen und Fähigkeiten. Wähl den Standard bewusst und prüfe das beabsichtigte Netzwerk und die Wallet-Unterstützung, bevor du einem Tutorial folgst. Diese Lektionen erstellen keine der beiden Token-Arten.
- Approve:
- Correction:
- Reviewer:
- Date:

### 8.30 `withdrawal-freeze.01e58e5e`

- Risk tier: Other security and finance
- Page: Safety (/xrpl/safety.html)
- Heading on that page: Withdrawal freeze
- Purpose: This sentence is other security or finance teaching, such as freeze, blackhole, phishing, Xaman, or MPTs.
- What the reader must understand: Keep the English warning. Freeze is not destruction. A blackhole is not proof a project is safe. MPTs are a different standard from trust-line tokens. A false quiz answer must stay false. The English wording to preserve is: Withdrawal freeze
- English: Withdrawal freeze
- Current translation: Auszahlungssperre
- Approve:
- Correction:
- Reviewer:
- Date:

### 8.31 `write-a-departure-plan-resolve-the-h.e40c2a02`

- Risk tier: Other security and finance
- Page: Trust lines lesson (/xrpl/builders/trust-lines.html)
- Heading on that page: Read a member account before changing anything
- Purpose: This sentence is other security or finance teaching, such as freeze, blackhole, phishing, Xaman, or MPTs.
- What the reader must understand: Keep the English warning. Freeze is not destruction. A blackhole is not proof a project is safe. MPTs are a different standard from trust-line tokens. A false quiz answer must stay false. The English wording to preserve is: Write a departure plan: resolve the held balance through a deliberate redemption or transfer decision, then inspect non-default line settings on both sides. Setting the limit to zero alone is not proof the line disappeared. There can still be a balance or other state keeping it present.
- English: Write a departure plan: resolve the held balance through a deliberate redemption or transfer decision, then inspect non-default line settings on both sides. Setting the limit to zero alone is not proof the line disappeared. There can still be a balance or other state keeping it present.
- Current translation: Schreib einen Abgangsplan: löse den gehaltenen Saldo durch eine bewusste Entscheidung zur Einlösung oder Übertragung auf und prüfe dann Trust-Line-Einstellungen, die vom Standardzustand abweichen, auf beiden Seiten. Das Limit allein auf null zu setzen ist kein Beweis, dass die Linie verschwunden ist. Es kann weiterhin einen Saldo oder einen anderen Zustand geben, der sie bestehen lässt.
- Approve:
- Correction:
- Reviewer:
- Date:

### 8.32 `write-the-purpose-exact-asset-identi.636d0341`

- Risk tier: Other security and finance
- Page: Builders hub (/xrpl/builders/)
- Heading on that page: Start with a project, finish with evidence
- Purpose: This sentence is other security or finance teaching, such as freeze, blackhole, phishing, Xaman, or MPTs.
- What the reader must understand: Keep the English warning. Freeze is not destruction. A blackhole is not proof a project is safe. MPTs are a different standard from trust-line tokens. A false quiz answer must stay false. The English wording to preserve is: {s1} write the purpose, exact asset identity, redemption promise and supply questions.
- English: {s1} write the purpose, exact asset identity, redemption promise and supply questions.
- Current translation: {s1} schreib den Zweck, die genaue Asset-Identität, das Einlöseversprechen und die Supply-Fragen.
- Approve:
- Correction:
- Reviewer:
- Date:

### 8.33 `xaman-credential-boundaries.55db3d97`

- Risk tier: Other security and finance
- Page: Xaman flows (/xrpl/builders/xaman-flows.html)
- Heading on that page: Go deeper with official sources
- Purpose: This sentence is other security or finance teaching, such as freeze, blackhole, phishing, Xaman, or MPTs.
- What the reader must understand: Keep the English warning. Freeze is not destruction. A blackhole is not proof a project is safe. MPTs are a different standard from trust-line tokens. A false quiz answer must stay false. The English wording to preserve is: Xaman credential boundaries
- English: Xaman credential boundaries
- Current translation: Grenzen für die Verwendung von Xaman-Zugangsdaten
- Approve:
- Correction:
- Reviewer:
- Date:

### 8.34 `xaman-flows.2d4dd6fc`

- Risk tier: Other security and finance
- Page: Builders hub; Issuer control; Project launch (/xrpl/builders/; /xrpl/builders/issuer-control.html; /xrpl/builders/project-launch-basics.html)
- Heading on that page: Deploy; Keep building; Keep building
- Purpose: This sentence is other security or finance teaching, such as freeze, blackhole, phishing, Xaman, or MPTs.
- What the reader must understand: Keep the English warning. Freeze is not destruction. A blackhole is not proof a project is safe. MPTs are a different standard from trust-line tokens. A false quiz answer must stay false. The English wording to preserve is: Xaman flows
- English: Xaman flows
- Current translation: Xaman-Abläufe
- Approve:
- Correction:
- Reviewer:
- Date:

### 8.35 `xaman-flows.811c9129`

- Risk tier: Other security and finance
- Page: Builders hub (/xrpl/builders/)
- Heading on that page: Start with a project, finish with evidence
- Purpose: This sentence is other security or finance teaching, such as freeze, blackhole, phishing, Xaman, or MPTs.
- What the reader must understand: Keep the English warning. Freeze is not destruction. A blackhole is not proof a project is safe. MPTs are a different standard from trust-line tokens. A false quiz answer must stay false. The English wording to preserve is: Xaman flows:
- English: Xaman flows:
- Current translation: Xaman-Abläufe:
- Approve:
- Correction:
- Reviewer:
- Date:

### 8.36 `xaman-flows.c8a29412`

- Risk tier: Other security and finance
- Page: Builders hub; Create a token; NFT basics; Trust lines lesson; Issuer control; Xaman flows; Project launch (/xrpl/builders/; /xrpl/builders/create-token.html; /xrpl/builders/nft-basics.html; /xrpl/builders/trust-lines.html; /xrpl/builders/issuer-control.html; /xrpl/builders/xaman-flows.html; /xrpl/builders/project-launch-basics.html)
- Heading on that page: Builders Hub; Create a token with a clear identity; Read an NFT beyond its picture; Set a boundary for an issued asset; Know who can still change the rules; Follow a signing request to its real result; Launch something people can verify
- Purpose: This sentence is other security or finance teaching, such as freeze, blackhole, phishing, Xaman, or MPTs.
- What the reader must understand: Keep the English warning. Freeze is not destruction. A blackhole is not proof a project is safe. MPTs are a different standard from trust-line tokens. A false quiz answer must stay false. The English wording to preserve is: {s1}Xaman flows
- English: {s1}Xaman flows
- Current translation: {s1}Xaman-Abläufe
- Approve:
- Correction:
- Reviewer:
- Date:

### 8.37 `xaman-implementation-checklist.b10f39bc`

- Risk tier: Other security and finance
- Page: Xaman flows (/xrpl/builders/xaman-flows.html)
- Heading on that page: Go deeper with official sources
- Purpose: This sentence is other security or finance teaching, such as freeze, blackhole, phishing, Xaman, or MPTs.
- What the reader must understand: Keep the English warning. Freeze is not destruction. A blackhole is not proof a project is safe. MPTs are a different standard from trust-line tokens. A false quiz answer must stay false. The English wording to preserve is: Xaman implementation checklist
- English: Xaman implementation checklist
- Current translation: Xaman-Umsetzungscheckliste
- Approve:
- Correction:
- Reviewer:
- Date:

### 8.38 `xaman-implementation-checks.cc5808c1`

- Risk tier: Other security and finance
- Page: Project launch (/xrpl/builders/project-launch-basics.html)
- Heading on that page: Go deeper with official sources
- Purpose: This sentence is other security or finance teaching, such as freeze, blackhole, phishing, Xaman, or MPTs.
- What the reader must understand: Keep the English warning. Freeze is not destruction. A blackhole is not proof a project is safe. MPTs are a different standard from trust-line tokens. A false quiz answer must stay false. The English wording to preserve is: Xaman implementation checks
- English: Xaman implementation checks
- Current translation: Xaman-Umsetzungsprüfungen
- Approve:
- Correction:
- Reviewer:
- Date:

### 8.39 `xaman-payload-concepts.1ddf0450`

- Risk tier: Other security and finance
- Page: Xaman flows (/xrpl/builders/xaman-flows.html)
- Heading on that page: Go deeper with official sources
- Purpose: This sentence is other security or finance teaching, such as freeze, blackhole, phishing, Xaman, or MPTs.
- What the reader must understand: Keep the English warning. Freeze is not destruction. A blackhole is not proof a project is safe. MPTs are a different standard from trust-line tokens. A false quiz answer must stay false. The English wording to preserve is: Xaman payload concepts
- English: Xaman payload concepts
- Current translation: Xaman-Payload-Begriffe
- Approve:
- Correction:
- Reviewer:
- Date:
