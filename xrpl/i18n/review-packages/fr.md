# XRPL LAYMAN review package: Français

This file is for a native speaker of Français. You do not need the website source code, and you do not need to open the site. The English sentence and the current Français translation are both in this file. The CSV next to this file has the same rows.

Nothing in this package is native-approved. The Approve, Correction, Reviewer, and Date lines are blank on purpose.

## How to review

1. Read one row at a time. The sections follow this order: wallet recovery and seed, signing, destination tags, trust lines, reserves and fees, DEX and AMM, NFTs, then other security and finance copy.
2. A sentence is filed under the first matching section. Seed wins over every later topic. A destination-tag sentence is in the destination-tag section even if it also mentions signing.
3. Decide whether a reader of Français learns the same fact as the English, including every “not”, “never”, and “cannot”. A quiz answer that is false in English must stay false.
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
- Current translation: Un secret gérable par une personne, qui peut dériver les clés. Ce n’est pas un mot de passe que l’on peut réinitialiser.
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
- Current translation: Une signer list attribue des poids et un quorum. Par exemple, trois signataires indépendants de poids un, avec un quorum de deux, exigent assez de signatures valides pour atteindre deux. Cela ne protège que la voie de signature prévue : examinez aussi toute master key ou regular key activée. Testez la récupération sur un réseau hors production avant de déplacer l’autorité.
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
- Current translation: Un payload Xaman est une demande de signature. Votre produit doit d’abord expliquer l’action, le réseau, le compte signataire, l’actif exact, le destinataire et le montant ou les permissions. Un sign-in identifie un compte ; ce n’est pas un paiement. Ne demandez jamais aux utilisateurs de coller un seed, des nombres secrets ou une clé privée dans votre page.
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
- Current translation: {s1} sont du matériel d’apprentissage en lecture seule, avec des exemples fictifs et un retour de quiz local. {s2} est un registre séparé pour une répétition de mise en œuvre plus tard ; ses actifs de test ne règlent pas de factures Mainnet. {s3} porte de vrais actifs et de vraies conséquences. Devnet peut inclure des changements expérimentaux ; un succès là-bas n’établit pas la disponibilité sur Mainnet. Ne réutilisez pas de vrais secrets dans les expériences. Vérifiez {s4} et l’état réel de l’amendment visé avant la mise en œuvre.
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
- Current translation: Considérez un seed divulgué comme compromis de façon permanente.
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
- Current translation: Apportez votre spécification d’actif de la leçon 1. Sachez la différence entre un identifiant public et un secret. Vous pouvez terminer chaque exercice avec les enregistrements fictifs ci-dessous ; ouvrir un explorateur est facultatif.
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
- Current translation: Un seed peut-il être réinitialisé ?
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
- Current translation: Créez un tableau des échecs avec l’entrée, le message utilisateur attendu, l’état enregistré et la récupération. Incluez le refus, le mauvais signataire, réseau, actif ou destinataire, une livraison insuffisante, l’expiration de la demande, une panne de réseau, un callback en double, un redémarrage et des données périmées. Pour chacun, dites ce qui ne doit jamais arriver : pas de faux reçu, de droit en double ni de second paiement silencieux.
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
- Current translation: Changer le mot de passe d’une application répare-t-il un seed divulgué ?
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
- Current translation: Dessinez une case pour chaque compte de la leçon 1. Sous chacune, listez séparément la signature master activée, la regular key et la voie de signer list. Ajoutez inconnu si l’enregistrement public ne répond pas à une question ; ne demandez le secret de personne pour compléter la carte.
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
- Current translation: La planification d’accès pour la famille et l’autorité de signature du registre sont des couches différentes ; documentez les deux sans exposer de secrets.
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
- Current translation: Le freeze restreint le mouvement des jetons ; le clawback peut récupérer un solde de jeton d’émetteur lorsque la capacité est activée. Ni l’un ni l’autre ne s’applique au XRP natif.
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
- Current translation: Gardez les secrets d’API du backend hors du code du navigateur. Utilisez un modèle d’intégration Xaman documenté, adapté à l’application. Ces pages n’ont pas de connexion de portefeuille, de demande de signature par QR ni d’action de soumission.
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
- Current translation: Gardez le seed hors ligne et privé.
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
- Current translation: Apprenez et inspectez d’abord. Pas de connexion de portefeuille, de saisie de seed, de signature ni de transactions sur cette page.
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
- Current translation: Apprenez la garde, les seeds, la signature, l’approvisionnement, le contrôle du compte et les limites de récupération.
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
- Current translation: Marquez les choix irréversibles ou sensibles à l’ordre. No Freeze ne peut pas être annulé. Le clawback de trust line doit être activé délibérément, selon les exigences du compte, avant que l’émetteur ait rempli son répertoire de propriétaire ; ce n’est pas un bouton de récupération qu’un émetteur peut ajouter librement plus tard. Vérifiez les règles AccountSet actuelles exactes avant la mise en œuvre.
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
- Current translation: Contrôle, garde, seeds, signature, approvisionnement, récupération, et les erreurs qui coûtent tout aux gens.
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
- Current translation: Ne tapez jamais votre seed dans un site au hasard.
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
- Current translation: Non. La regular key reste une voie de signature avec de larges pouvoirs. Inspectez sa présence et la signer list, puis documentez quelles actions restent possibles. Une preuve publique de la configuration du compte ne peut pas prouver avec quelle sûreté quelqu’un conserve un secret, ni si une clé privée est vraiment inconnue.
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
- Current translation: Prouvez que des paiements qui ne correspondent pas ne peuvent pas débloquer l’accès, que les doublons ne peuvent pas créditer deux fois, que l’expiration et les pannes de réseau se récupèrent, et que les enregistrements survivent au redémarrage. Examinez le diff exact de publication, l’autorité du compte et les divulgations de frais ; répétez la sauvegarde, la restauration et le retour arrière ; assignez l’assistance et la surveillance. Un paiement de parcours nominal ne vaut pas une acceptation complète.
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
- Current translation: Seed secret
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
- Current translation: Seed partagé :
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
- Current translation: Seeds, clés et signatures
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
- Current translation: Séparez les couches de récupération. Revenir sur une page peut cacher un mauvais bouton ; restaurer une base de données peut perdre des reçus légitimes plus récents ; ni l’un ni l’autre n’annule des transferts de registre. Documentez les limites des sauvegardes, la vérification de restauration, et comment le rapprochement conserve les transactions après le point de sauvegarde.
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
- Current translation: {s1} Quelqu’un demande votre seed.
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
- Current translation: Commencez ici. Sachez distinguer une adresse de compte publique d’un secret de signature privé. Si cela ne vous est pas familier, lisez d’abord les bases du portefeuille. Il vous faut seulement un cahier ; pas de compte, de fonds ni d’outils de code.
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
- Current translation: L’autorité secrète qui prouve que vous contrôlez le compte. Qui contrôle les clés contrôle le compte.
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
- Current translation: La partie serveur d’une application, là où les secrets et les vérifications de commande qui font autorité doivent se trouver.
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
- Current translation: Utilisez des comptes de test séparés et un réseau hors production. Répétez les signatures refusées, l’expiration, les fonds ou la réserve insuffisants, le mauvais réseau, un RPC indisponible et les callbacks en double. Gardez les secrets hors des fichiers d’interface et des journaux. Vérifiez le support actuel du portefeuille et la disponibilité de l’amendment pour le réseau réel ; une page de documentation n’est pas une preuve d’activation partout.
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
- Current translation: Écrivez sur papier des scénarios de récupération : un signataire indisponible ; deux indisponibles ; un compromis ; le gardien de la regular key absent. Dites quelles actions restent possibles et qui décide de suspendre les opérations. Une promesse privée, hors registre, d’exiger deux approbations n’est pas la même chose qu’une application par le registre.
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
- Current translation: Votre seed n’est pas un mot de passe. Il n’y a pas de bureau de réinitialisation derrière le registre.
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
- Current translation: Un callback est une raison pour le backend d’aller chercher le résultat du payload, pas une preuve à croire aveuglément. Vérifiez l’état résolu ou signé, le compte attendu et le réseau prévu. Pour une transaction de registre, recherchez son hash de transaction et vérifiez la validation, le résultat et l’opération exacte prévue. Une demande signée peut encore échouer ou rester non résolue sur le registre.
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
- Current translation: Un club fictif propose 1,000 crédits CLUB. Sa fiche de lancement indique un logo et un ticker, mais pas d’adresse d’émetteur, de politique de rachat ni d’autorité de signature. Que faut-il ajouter avant qu’un membre puisse identifier l’actif ou juger la promesse ?
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
- Current translation: Une configuration de multisignature qui exige un poids de signataires suffisant.
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
- Current translation: Un projet dit « master key désactivée, donc personne ne peut plus rien changer ». Son compte a encore une regular key activée. La conclusion est-elle fondée ?
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
- Current translation: Une regular key est une voie de signature séparée.
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
- Current translation: Un message d’assistance dit que vos 25 crédits sont bloqués parce que votre limite n’est que de 100, et vous demande de signer une limite illimitée. Cette explication ne découle pas de l’exemple. Examinez d’abord l’échec exact, l’émetteur et le réseau, l’autorisation, les freezes, la destination et l’opération prévue. Augmenter une limite n’est pas une réparation générale des problèmes de jetons.
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
- Current translation: Une tentative de retirer l’autorité de signature utilisable du compte. Traitez-la comme une décision de perte de contrôle permanente, pas comme une note de sûreté.
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
- Current translation: Un explorateur demande une signature seulement pour inspecter une trust line publique. Est-ce nécessaire pour lire ?
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
- Current translation: Demandez si la tâche a besoin d’une trust line. Lire un enregistrement public ne demande pas de signature. Recevoir du XRP natif ne demande pas de trust line. Évitez d’ajouter un réglage seulement parce qu’une publicité le dit obligatoire.
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
- Current translation: Avant qu’une demande existe, écrivez l’intention enregistrée : client ou session, action attendue, signataire attendu lorsqu’il est requis, destination, réseau, actif, montant, tag de routage éventuel, expiration et référence de commande. Une adresse de portefeuille tapée dans une case n’est pas une preuve de contrôle.
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
- Current translation: Liez l’identifiant de la demande à O-17 dans le backend. À la notification, récupérez le résultat du payload et comparez-le à cet enregistrement. Confirmez le signataire attendu et le réseau. Pour SignIn, vérifiez la preuve liée et la session ; il n’y a pas de transaction de paiement à présenter comme reçue.
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
- Current translation: QR aveugle :
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
- Current translation: Signature aveugle :
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
- Current translation: Vérifiez aussi les permissions déléguées
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
- Current translation: Comparez à l’identité et à la politique prévues. Refusez un mauvais signataire lorsque le contrôle du compte est requis ; ne renommez pas en silence le propriétaire de la commande.
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
- Current translation: Désactiver la signature master désactive-t-il aussi une regular key ?
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
- Current translation: L’Issuer A fictif a la signature master désactivée, une regular key assignée, et une signer list de trois personnes de poids un chacune, avec un quorum de deux. C’est un exemple d’inspection, pas une configuration suggérée.
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
- Current translation: Pour la voie de signer list, calculez que deux signataires de poids un atteignent le quorum de deux, alors qu’un seul ne l’atteint pas. Entourez maintenant la voie de regular key : c’est une voie de signature alternative. Une signer list à deux personnes n’impose pas un contrôle à deux personnes sur chaque transaction tant qu’une voie à clé unique séparée reste en place.
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
- Current translation: Inspectez un compte public avec un explorateur en lecture seule : cherchez les flags du compte, la regular key, la signer list et les enregistrements de délégation pris en charge par ce réseau. Utilisez les définitions officielles liées pour interpréter les noms. Notez seulement des faits publics, avec leur heure d’observation. Un panneau d’explorateur manquant ne prouve pas qu’une voie d’autorité n’existe pas ; utilisez des données de registre complètes, ou laissez l’élément non résolu.
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
- Current translation: Inspectez l’information publique sans signer. Vérifiez l’adresse complète de l’émetteur et le réseau, pourquoi une trust line est nécessaire, la limite et les flags proposés, les contrôles d’autorisation et de freeze de l’émetteur, et les conséquences pour la réserve. Une recherche publique de portefeuille n’exige pas d’accorder une trust line. Une grande limite n’est pas un signal de qualité.
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
- Current translation: Inspectez les poids des signataires, le quorum, les identités de signataires autorisées et le compte ou le réseau prévu. N’affaiblissez pas le quorum et n’activez pas une autre clé comme correctif rapide.
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
- Current translation: Listez l’émetteur, les comptes opérationnels, la signature master activée, la regular key et la signer list. Une regular key peut autoriser la plupart des actions du compte ; ce n’est pas seulement un identifiant d’API en lecture seule. Désactiver la signature master ne prouve pas que toutes les autres voies de signature ont disparu.
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
- Current translation: (same as the English) Master key
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
- Current translation: Vérification de l’émetteur, défense contre le phishing, relecture avant signature, risque de garde, et quoi faire quand quelque chose tourne mal.
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
- Current translation: No Freeze abandonne de façon permanente l’autorité de freeze individuel et de deep freeze, ainsi que la capacité d’effacer un global freeze ; ce n’est pas une promesse générale qu’aucune restriction ne pourra jamais exister. Le blackholing vise à retirer l’autorité de signature utilisable. Aucune de ces étiquettes ne prouve une distribution équitable, la liquidité, la couverture ou un code d’application sûr. Inspectez les réglages réels du compte et chaque voie de signature, au lieu de vous fier à un badge.
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
- Current translation: Guide officiel de délégation de permissions et avertissements actuels
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
- Current translation: Sur un explorateur en lecture seule, sélectionnez le réseau prévu et recherchez le NFTokenID complet. Trouvez le propriétaire actuel, l’émetteur, le taxon, les flags et l’URI. Décodez les flags avec la référence de transaction liée si l’explorateur ne les explique pas. Notez l’heure d’observation et le registre, s’ils sont disponibles. Traitez les liens de métadonnées distants comme un contenu non fiable ; ne signez pas une demande pour révéler une image.
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
- Current translation: (same as the English) Regular key
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
- Current translation: Regular keys et multisigning
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
- Current translation: Examinez les réglages de regular key et de signer list.
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
- Current translation: Faites tourner les regular keys ou les signer lists lorsque c’est approprié.
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
- Current translation: Enregistrez la carte d’autorité et la divulgation des contrôles en langage clair. Faites expliquer par une autre personne comment la regular key change l’exemple de deux sur trois. Si elle ne le peut pas, améliorez l’explication avant de passer à la leçon sur le parcours de signature.
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
- Current translation: Séparez freeze, autorisation, clawback et autorité de signature dans votre divulgation.
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
- Current translation: Le poids combiné minimum des signataires, nécessaire pour une transaction multi-signée.
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
- Current translation: Le site dit que personne ne peut modifier l’actif parce que la signature master est désactivée. Votre carte montre une regular key. Remplacez l’affirmation par un énoncé exact des voies activées et des capacités qui restent. Vous n’avez pas assez de preuves pour affirmer que personne ne connaît une clé, ni pour certifier les pratiques de stockage de l’équipe.
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
- Current translation: C’est un exercice d’inspection, pas une recette de blackholing. Ne désactivez pas de clés, ne posez pas de flags irréversibles et ne retirez pas de signataires en suivant cette leçon.
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
- Current translation: Des signataires deux sur trois existent à côté d’une regular key activée. Chaque action est-elle forcée de passer par deux personnes ?
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
- Current translation: Utilisez l’identité d’actif exacte de la leçon 1. Une trust line appartient au modèle classique du jeton fongible ; ce n’est pas un achat de NFT ni un montage de XRP natif. Aucune signature n’est nécessaire pour cette feuille.
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
- Current translation: Là où le réseau prend en charge la délégation de permissions, un compte peut autoriser un autre compte à effectuer des actions précisées. Un délégué n’est pas la même chose qu’une regular key, ni qu’un signataire sur le compte propriétaire. Incluez les enregistrements de délégation existants et leurs permissions exactes dans un vrai examen d’autorité ; une carte qui ne contient que trois voies de clés peut être incomplète. Vérifiez le support actuel de l’amendment et les avertissements officiels propres aux permissions avant d’utiliser cette fonction. Ce cours ne configure pas la délégation.
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
- Current translation: Écrivez une divulgation utilisateur avec trois colonnes : capacité, preuve présente et politique de fonctionnement. Exemple : regular key présente / champ de compte observé / le club dit que deux membres du personnel approuvent son usage. Étiquetez la dernière colonne comme politique, pas comme garantie du protocole.
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
- Current translation: XRPL permet aux comptes de séparer la signature quotidienne de la master key, et d’exiger plusieurs signataires.
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
- Current translation: Oui ; la signer list remplace chaque autre clé
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
- Current translation: Destination tag
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
- Current translation: Destination tags et mémos
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
- Current translation: Pour les paiements, comparez le destinataire, l’identité de l’actif, le montant livré et tout destination tag ou référence exigé avec l’intention enregistrée. Les paiements partiels rendent le montant demandé dangereux comme reçu : inspectez delivered_amount dans les métadonnées. Enregistrez une transaction une seule fois, pour qu’un callback répété ne puisse pas accorder un second droit. Une preuve de registre inconnue ou indisponible reste en attente.
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
- Current translation: Apprenez les paiements, les destination tags, les trustlines, les échanges de jetons, les NFT, les offres et l’exécution.
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
- Current translation: Que fait un destination tag ?
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
- Current translation: 2. Quel actif n’a pas besoin d’une trustline ?
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
- Current translation: Une page promotionnelle vous demande d’ajouter une trust line illimitée vers un jeton au ticker familier. Vous vouliez seulement examiner le projet. Que faire ensuite ?
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
- Current translation: Une trust line enregistre une relation entre des comptes pour une devise. « Trust » ici ne signifie pas que l’émetteur a été approuvé comme sûr.
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
- Current translation: Une trustline est une relation sur le registre entre deux comptes pour un code de devise précis.
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
- Current translation: {s1} Une trustline prouve qu’un jeton est sûr.{br2}{s3} Elle crée seulement la relation de compte nécessaire pour le détenir.
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
- Current translation: Une trustline indique à XRPL que votre compte est prêt à détenir un actif émis lié à un émetteur précis. Elle peut inclure une limite et d’autres réglages. $XRP n’utilise pas de trustlines, parce qu’il est natif au registre.
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
- Current translation: Activez la trustline et regardez la relation se former.
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
- Current translation: Créer une trustline
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
- Current translation: Créer une trustline est la permission de détenir un actif. Ce n’est pas une approbation, une garantie d’investissement ni un examen de sécurité.
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
- Current translation: Code de devise, émetteur, supply, trustlines et contrôles.
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
- Current translation: Trustline active. Ce portefeuille peut maintenant détenir l’actif TOKEN de cet émetteur, selon sa limite et ses réglages.
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
- Current translation: Créer une trustline
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
- Current translation: Aucune trustline n’existe. Ce portefeuille ne peut pas détenir l’actif TOKEN de cet émetteur.
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
- Current translation: Retirer la trustline
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
- Current translation: Faut-il une trust line pour recevoir du XRP natif ?
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
- Current translation: Une trustline prouve-t-elle la sûreté ?
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
- Current translation: Expliquez pourquoi XRP n’a pas besoin de trust line, et pourquoi un ticker seul ne suffit pas.
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
- Current translation: Vérifiez d’abord le réseau et l’identité exacte de l’actif. La prise en charge de l’affichage et l’existence sur le registre sont deux choses différentes. Ne créez pas des trust lines répétées et n’envoyez pas d’argent pour faire apparaître un logo.
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
- Current translation: Dans ce modèle, un détenteur établit une trust line et l’émetteur envoie la devise émise à ce détenteur. Une trust line seule ne distribue pas de jetons. Renvoyer un solde à son émetteur réduit la quantité en circulation. Une limite de trust n’est pas un plafond de supply pour tout le projet, et une promesse de supply sur un site n’est pas une application par le registre. Expliquez l’émission, le rachat et l’autorité qui reste avant de promouvoir l’actif.
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
- Current translation: L’autorisation de l’émetteur contrôle qui peut détenir une devise lorsque c’est exigé. Le freeze individuel restreint la dépense à travers une trust line ; le deep freeze ajoute des restrictions de réception, avec des exceptions directes de l’émetteur. Le global freeze a des effets plus larges. Ces contrôles de jeton ne gèlent pas le XRP natif. Le clawback est une capacité séparée et doit être divulgué séparément ; ce n’est pas un autre nom pour freeze.
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
- Current translation: Comprenez le XRP Ledger, les portefeuilles, les comptes, les émetteurs, les trustlines, les réserves, les jetons, les transactions, le DEX, les AMM, les NFT, et comment tout cela se relie.
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
- Current translation: Une trust line enregistre une relation entre des comptes pour une devise. « Trust » ici ne signifie pas que l’émetteur a été approuvé comme sûr.
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
- Current translation: Trust lines | Centre des développeurs | XRPL LAYMAN
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
- Current translation: Paiements, tags, trustlines, offres, AMM, NFT, et comment les transactions XRPL s’exécutent.
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
- Current translation: Aucune trustline n’existe.
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
- Current translation: Aucune trustline nécessaire
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
- Current translation: Trustlines détenues
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
- Current translation: Payment, trustline, offre, offre NFT ou réglage de compte ?
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
- Current translation: (same as the English) Trust line
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
- Current translation: (same as the English) Trust lines
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
- Current translation: Trust lines :
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
- Current translation: (same as the English) {s1}Trust lines
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
- Current translation: Trustline en général exigée
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
- Current translation: Visualiseur de trustline
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
- Current translation: TrustSet crée ou modifie une relation de trust line. Son LimitAmount identifie la devise, l’émetteur contrepartie et la limite. Le XRP natif n’utilise pas de trust lines. Cette leçon couvre les jetons de trust line, pas l’autorisation MPT.
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
- Current translation: Ce qu’une trustline ne signifie pas
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
- Current translation: Qu’est-ce qu’une trustline ?
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
- Current translation: XRP est natif ; les trust lines décrivent les devises émises.
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
- Current translation: Votre compte a en général besoin d’une trustline vers l’émetteur exact et la devise.
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
- Current translation: 1 $XRP de réserve de base
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
- Current translation: Une vente utilise en général une offre NFT et son acceptation. Créer une offre n’est pas un paiement ni une livraison terminés. Avant l’acceptation, vérifiez le NFT exact, l’actif de paiement, le montant, la restriction de destination, l’expiration et les frais de transfert de l’émetteur. Les frais de transfert NFT utilisent des unités de 0.001% ; par exemple 1,000 représente 1%, pas 1,000 XRP. L’application dépend du transfert. Confirmez ensuite le résultat validé et la propriété.
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
- Current translation: Frais AMM %
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
- Current translation: Un compte devient actif sur le registre lorsqu’il reçoit assez de $XRP pour couvrir la réserve actuelle.
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
- Current translation: Un NFT ne correspond pas toujours à un seul objet de réserve du propriétaire. XRPL range les NFT dans des objets NFTokenPage, et chaque page peut contenir plusieurs NFT. Ne comptez pas les NFT un par un comme des objets de réserve séparés.
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
- Current translation: Un NFT XRPL est un jeton unique sur le registre, avec son propre identifiant, ses flags, son émetteur, son taxon, sa séquence et des frais de transfert facultatifs.
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
- Current translation: Règles de réserve actuelles
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
- Current translation: 1 $XRP de réserve de base + {objects} objets détenus × 0.2 $XRP.
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
- Current translation: 1 $XRP de réserve de base + {objects} objet détenu × 0.2 $XRP.
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
- Current translation: {s1} distinguez le solde, la limite, les contrôles et les réserves.
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
- Current translation: Estimez la réserve d’un compte simple. La propriété réelle et le comportement de la réserve peuvent varier selon le type d’objet.
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
- Current translation: {s1} Chaque $XRP affiché peut être dépensé.{br2}{s3} Une partie peut être exigée pour les réserves du compte et du propriétaire.
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
- Current translation: Frais
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
- Current translation: Flags, URI, taxon, offres, frais de transfert et cycle de vie.
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
- Current translation: © 2026 House of Cauliman. Tous droits réservés.
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
- Current translation: Inspectez une vente fictive proposée : NFT Record N, prix 20 XRP, destinataire restreint Member C, et une expiration indiquée. Le champ de frais de transfert du NFT, 1,000, représente 1%. Sur une vente applicable de 20 XRP, cela fait 0.2 XRP ; vérifiez le mode de vente réel et la comptabilité du règlement, au lieu de supposer que chaque prix affiché est le net du vendeur.
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
- Current translation: Les frais sont-ils anormaux ?
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
- Current translation: Les objets de registre peuvent affecter la réserve de XRP exigée par un compte. Les règles et les montants de réserve peuvent changer, et des exceptions de trust line existent : vérifiez les règles actuelles du réseau au lieu de supposer que chaque ligne coûte la même chose. Mettre une limite à zéro n’efface pas un solde non nul et ne garantit pas un retrait immédiat. Une ligne retirable doit remplir les conditions d’état par défaut du registre.
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
- Current translation: Mainnet utilise actuellement un {s1} plus {s2}. Ces valeurs peuvent changer par le vote de frais des validateurs, donc le logiciel devrait interroger le réseau au lieu de les coder en dur pour toujours.
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
- Current translation: Notre club de quartier fictif veut que les membres réservent des places d’atelier avec des crédits. Portez ce même projet à travers le cours. Des étiquettes comme Issuer A sont des étiquettes de papier, pas des adresses utilisables. Le but est de trouver les décisions manquantes avant que quelqu’un crée un actif.
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
- Current translation: Prévoyez les réserves et le retrait
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
- Current translation: Planifiez l’inspection de la réserve séparément de la quantité de jetons. Obtenez les réserves de base et incrémentales actuelles du réseau, et les objets de propriétaire pertinents du compte, lorsque vous mettez en œuvre un vrai outil. Ne multipliez pas chaque solde de jeton visible par un coût XRP fixe : les règles des trust lines et des autres objets ont des exceptions.
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
- Current translation: {s1} Lisez le solde, la limite, les contrôles de l’émetteur et les conséquences pour la réserve, sans confondre un changement de réglages avec la réception d’argent.
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
- Current translation: Calculateur de réserve
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
- Current translation: Réserve
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
- Current translation: Réserves
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
- Current translation: Séparez le revenu du produit des frais du réseau XRPL.
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
- Current translation: Références techniques vérifiées le 3 octobre 2026. Les amendments du réseau, le support des portefeuilles et les règles de réserve peuvent changer. Vérifiez la documentation actuelle avant de mettre en œuvre de vraies transactions.
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
- Current translation: Le club propose maintenant un NFT commémoratif facultatif. Il est séparé des crédits. Utilisez cet enregistrement fictif : réseau Testnet ; identité du NFT Record N ; émetteur Issuer A ; propriétaire Member B ; transférable oui ; burnable oui ; mutable oui ; champ de frais de transfert 1,000 ; URI une page de métadonnées HTTPS. Ce sont des champs descriptifs, pas du JSON de transaction.
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
- Current translation: {s1} Les frais du réseau vont aux validateurs.{br2}{s3} Les coûts de transaction XRPL sont détruits.
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
- Current translation: Le solde total n’est pas la même chose que le XRP disponible au-dessus des besoins de réserve et de frais. Vérifiez le résultat exact et les règles de réserve actuelles avant de changer des réglages sans lien.
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
- Current translation: Frais de transfert
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
- Current translation: La taille de l’échange représente {pct}% du côté de pool sélectionné, avant des frais de {fee}%.
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
- Current translation: Utilisé pour les réserves et les coûts de transaction
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
- Current translation: Pourquoi une partie du $XRP reste réservée
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
- Current translation: Écrivez un contrat de publication d’une page : résultat pour l’utilisateur, périmètre, identités, contrôles, frais et limites.
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
- Current translation: Écrivez une promesse de rachat : un crédit réserve une place éligible, selon les conditions de réservation écrites. Décidez les annulations, l’expiration, les remboursements, l’assistance, et ce qui se passe si le club ferme. Le protocole du jeton n’écrit pas ces conditions métier pour vous, et ne les applique pas.
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
- Current translation: Écrivez le problème, l’utilisateur prévu et le plus petit résultat utile. Publiez les identités d’actif exactes, les rôles des comptes, l’autorité d’émetteur qui reste, les frais du produit et les coûts du réseau. Distinguez un prototype, une répétition sur réseau de test et une fonction Mainnet qui fonctionne. Évitez de promettre un profit, une disponibilité permanente ou une garantie de sécurité que vous ne pouvez pas établir.
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
- Current translation: Du XRP qui doit rester disponible pour soutenir un compte et les objets de registre concernés ; c’est différent d’un frais de transaction.
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
- Current translation: AMM et slippage
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
- Current translation: Un AMM détient deux actifs dans un pool et fixe le prix des swaps à partir des soldes du pool.
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
- Current translation: DEX, offres et AMM
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
- Current translation: Prix, liquidité, slippage, contrôles de l’émetteur, concentration, cycles, et le risque que les gens ignorent jusqu’à ce que cela fasse mal.
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
- Current translation: Visuel simple du slippage
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
- Current translation: Slippage et profondeur du pool
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
- Current translation: Le DEX de XRPL utilise des offres pour échanger un actif contre un autre.
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
- Current translation: Une annonce dit « objet de collection permanent ». Le NFT est mutable, son image est sur un serveur web ordinaire, et le vendeur montre une capture d’écran plutôt que le NFTokenID. Quelles affirmations restent non prouvées ?
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
- Current translation: Vérifiez les permissions de burn, de transfert et de modification d’URI ; notez l’incertitude au lieu de supposer les valeurs par défaut.
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
- Current translation: Choisissez un exemple visible publiquement et trouvez son NFTokenID, son émetteur, son propriétaire et son taxon, sans connecter de portefeuille.
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
- Current translation: Choisissez le modèle d’actif sur le papier : des crédits interchangeables suggèrent un jeton fongible ; un objet de collection d’adhésion identifiable séparément suggère un NFT. Notez un jeton de trust line classique pour cet exercice. Les MPTs sont un autre standard, pas un autre nom pour le même montage.
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
- Current translation: Mint, burn et offre
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
- Current translation: Le mint crée le NFT ; le burn détruit son jeton de registre ; une offre propose un échange et peut rester non acceptée.
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
- Current translation: NFTokenMint fixe des flags importants. Transferable permet les transferts entre détenteurs ordinaires ; sans lui, les transferts liés à l’émetteur ont des restrictions particulières. Burnable donne à l’émetteur ou à sa partie autorisée l’autorité de burn ; les propriétaires peuvent burn leurs propres NFT. Un NFT mutable peut voir son URI mise à jour par l’émetteur ou le minter autorisé, par NFTokenModify. Ne supposez pas que le pointeur de métadonnées de chaque NFT est fixe.
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
- Current translation: L’autorité NFTokenModify est séparée de la propriété ordinaire.
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
- Current translation: Les NFT passent par des transactions de mint, d’offre, d’acceptation, de transfert et de burn.
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
- Current translation: La propriété seule n’est pas une permission de modification. Pour un NFT mutable, NFTokenModify est limité à l’émetteur ou au minter autorisé ; l’amendment du réseau et le support du portefeuille comptent aussi.
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
- Current translation: Notez le réseau, le NFTokenID, l’émetteur, le propriétaire actuel et le taxon. Un taxon regroupe des NFT liés d’un émetteur ; ce n’est pas une preuve de rareté ni une promesse qu’une collection est terminée. La propriété et le mint sont des rôles différents.
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
- Current translation: Séparez une restriction de solde du clawback ou du burn de NFT. Demandez le standard d’actif exact et le contrôle utilisé.
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
- Current translation: Réglages qui peuvent contrôler si le NFT est transférable et si l’émetteur peut le burn.
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
- Current translation: Le club appelle cet objet de collection permanent, mais l’exemple permet explicitement les changements d’URI et le burn autorisé par l’émetteur. Réécrivez l’affirmation ainsi : un objet de collection transférable, avec des contrôles d’émetteur divulgués et un contenu hébergé à l’extérieur. Énoncez séparément le plan de conservation et la licence. Une promesse plus claire est plus utile qu’un badge de permanence.
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
- Current translation: La capture d’écran n’identifie pas le NFT. Obtenez son réseau et son NFTokenID, inspectez l’émetteur et le propriétaire, puis inspectez les flags et l’URI. Des métadonnées mutables et un hébergement externe exigent une divulgation et un plan de conservation. La propriété sur le registre ne transfère pas automatiquement le droit d’auteur et ne prouve pas que l’image reste disponible en permanence.
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
- Current translation: Un membre voit deux actifs avec le même logo de club. L’un vient de Issuer A et l’autre de Issuer C. La bonne décision est de comparer les identités complètes à la spécification du club, pas de choisir la plus belle image. Même l’actif qui correspond demande encore l’examen séparé du rachat et de l’autorité.
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
- Current translation: Ajoutez une colonne de contrôle. Notez si l’autorisation de l’émetteur est exigée et accordée, si des restrictions de freeze existent, et quels sont les réglages ripple concernés. Inconnu est un résultat valide : cela veut dire qu’il vous faut une preuve, pas une valeur par défaut devinée.
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
- Current translation: Une autorisation peut être exigée par un émetteur avant qu’un détenteur puisse détenir sa devise. Les réglages de freeze peuvent restreindre l’actif. Le rippling peut déplacer de la valeur à travers des relations de trust line compatibles, dans le cadre de paiements. Les réglages No Ripple agissent sur ces chemins ; ils ne rendent pas un jeton sûr et ne retirent pas le risque d’émetteur. Examinez les réglages du compte et de la ligne avant de changer les valeurs par défaut.
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
- Current translation: État blackhole
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
- Current translation: Apportez les notes d’identité et d’autorité du projet. Vous n’avez pas besoin d’un portefeuille pour cette leçon. Si vous mettez en œuvre une intégration plus tard, utilisez un environnement de test séparé et la documentation officielle actuelle de Xaman.
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
- Current translation: Un émetteur peut-il geler le XRP natif avec ses contrôles de freeze de jeton ?
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
- Current translation: La création ne crée pas d’acheteurs, de prix de marché ni de fonds de rachat. Examinez la profondeur réelle du marché et les conditions de rachat publiées ; ne décrivez jamais un prix sans soutien comme une valeur garantie.
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
- Current translation: Geler un jeton émis signifie-t-il que l’émetteur peut geler le XRP natif du détenteur ?
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
- Current translation: Expliquez votre réponse sans regarder l’exemple traité, puis comparez. Si vous avez deviné, revenez à la section concernée. Les cases et le retour du quiz restent sur cette page seulement ; conservez vous-même vos notes de projet.
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
- Current translation: Suivez un club de quartier fictif, des crédits d’atelier jusqu’à un objet de collection et un parcours de réservation. Chaque leçon contient des définitions, une feuille guidée sur papier, une décision traitée, des erreurs fréquentes et des questions avec explications. Lisez la leçon, tentez la feuille avant de vérifier la réponse, et gardez la page de notes qui en résulte. Il n’y a pas de compte, de certificat de score ni de profil d’apprentissage enregistré.
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
- Current translation: Contrôles de freeze
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
- Current translation: Le freeze est décrit comme une destruction de jetons
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
- Current translation: Types de freeze et No Freeze
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
- Current translation: Freeze et clawback
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
- Current translation: Dans une vue de compte d’explorateur en lecture seule, ouvrez la section des soldes émis ou des trust lines. Trouvez la devise précise et l’émetteur pair, puis comparez le solde, la limite et les champs de freeze, d’autorisation ou de ripple affichés. Identifiez le point de vue affiché. Si un champ manque dans l’interface, écrivez non affiché au lieu de supposer qu’il est désactivé. Votre feuille d’apprentissage peut rester fictive si aucun enregistrement adapté n’est disponible.
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
- Current translation: Le retour interactif exige JavaScript. Tout le contenu de la leçon et la réponse traitée ci-dessus restent disponibles.
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
- Current translation: Listez les preuves dont un relecteur a besoin : identité exacte de l’actif ; qui peut émettre ou changer les contrôles ; enregistrements de distribution ; conditions de rachat ; tout mécanisme de plafond affirmé ; et ce qui reste inconnu. Utilisez la leçon 4 pour compléter la section d’autorité, au lieu de supposer que le compte ne peut pas changer.
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
- Current translation: Listez les contrôles de jeton séparément des clés : autorisation exigée, freeze individuel, deep freeze, global freeze, No Freeze et capacité de clawback. Expliquez l’effet sur les détenteurs et la preuve que vous avez inspectée. Ne transformez pas une restriction sur une relation de jeton en une restriction sur XRP ou sur chaque actif.
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
- Current translation: Parcours Xaman | Centre des développeurs | XRPL LAYMAN
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
- Current translation: La page publique de NEB décrit un futur système d’échange. Son aperçu n’est pas une preuve de flux en direct ni d’exécution.
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
- Current translation: Ne changez jamais les flags de rippling, de freeze ou d’autorisation seulement pour effacer un avertissement que vous ne comprenez pas. Un TrustSet réussi est un changement de réglages, pas un achat ni une approbation de sûreté.
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
- Current translation: Phishing et faux parcours de connexion
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
- Current translation: Rachat
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
- Current translation: Répétez une transaction incertaine : un hash existe, mais une recherche ne le trouve pas. Gardez l’intention d’origine et la preuve d’expiration bornée. Demandez si le serveur interrogé a l’historique exigé et a dépassé la borne de registre concernée, avant de conclure à la non-inclusion. N’émettez pas un nouveau paiement seulement parce qu’une recherche était vide.
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
- Current translation: Enregistrez une spécification d’actif d’une page, avec le but, le standard choisi, le réseau, l’identité, les conditions de rachat, le calcul du supply et les questions d’autorité ouvertes. Dans la leçon 2, vous ajouterez un objet de collection séparé ; ne traitez pas le crédit et l’objet de collection comme le même actif.
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
- Current translation: Des arnaqueurs peuvent vous pousser à autoriser vous-même la transaction.
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
- Current translation: Voyez XRPL comme la base de données partagée sous les applications. Xaman, les plateformes d’échange, les explorateurs, les jeux et les places de marché sont des interfaces. Le registre est l’enregistrement qu’ils lisent et dans lequel ils écrivent.
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
- Current translation: Cette leçon suit le modèle classique du jeton de trust line. XRPL a aussi les Multi-Purpose Tokens (MPTs), avec des identifiants et des capacités différents. Choisissez le standard délibérément, et vérifiez le réseau prévu et le support du portefeuille avant de suivre un tutoriel. Ces leçons ne créent ni l’un ni l’autre type de jeton.
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
- Current translation: Gel des retraits
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
- Current translation: Écrivez un plan de départ : résolvez le solde détenu par une décision délibérée de rachat ou de transfert, puis inspectez les réglages de ligne non par défaut des deux côtés. Mettre la limite à zéro seul ne prouve pas que la ligne a disparu. Il peut encore y avoir un solde ou un autre état qui la maintient.
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
- Current translation: {s1} écrivez le but, l’identité exacte de l’actif, la promesse de rachat et les questions de supply.
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
- Current translation: Limites des identifiants Xaman
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
- Current translation: Parcours Xaman
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
- Current translation: Parcours Xaman :
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
- Current translation: {s1}Parcours Xaman
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
- Current translation: Liste de contrôle de mise en œuvre Xaman
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
- Current translation: Vérifications de mise en œuvre Xaman
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
- Current translation: Notions de payload Xaman
- Approve:
- Correction:
- Reviewer:
- Date:
