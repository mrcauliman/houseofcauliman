# XRPL LAYMAN review package: 日本語

This file is for a native speaker of 日本語. You do not need the website source code, and you do not need to open the site. The English sentence and the current 日本語 translation are both in this file. The CSV next to this file has the same rows.

Nothing in this package is native-approved. The Approve, Correction, Reviewer, and Date lines are blank on purpose.

## How to review

1. Read one row at a time. The sections follow this order: wallet recovery and seed, signing, destination tags, trust lines, reserves and fees, DEX and AMM, NFTs, then other security and finance copy.
2. A sentence is filed under the first matching section. Seed wins over every later topic. A destination-tag sentence is in the destination-tag section even if it also mentions signing.
3. Decide whether a reader of 日本語 learns the same fact as the English, including every “not”, “never”, and “cannot”. A quiz answer that is false in English must stay false.
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
- Current translation: 鍵を導出できる、人が管理できる秘密情報（seed）です。リセットできるパスワードではありません。
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
- Current translation: 署名者リスト（signer list）は、重みとクォーラム（quorum）を割り当てます。たとえば、重み1の独立した署名者3人とクォーラム2なら、2に達するだけの有効な署名が必要です。これは意図した署名経路だけを守ります。有効なマスターキー（master key）やレギュラーキー（regular key）も確認してください。権限を移す前に、本番以外のネットワークで復旧を試してください。
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
- Current translation: Xamanのペイロードは、署名リクエスト（signing request）です。プロダクトはまず、操作、ネットワーク、署名するアカウント、正確な資産、受取人、金額または権限を説明すべきです。サインインはアカウントを識別します。支払いではありません。シード（seed）、秘密の番号、秘密鍵を、あなたのページへ貼り付けさせないでください。
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
- Current translation: {s1}は、架空の例と、この画面だけのクイズ結果を含む、読み取り専用の学習資料です。{s2}は、あとで実装をリハーサルするための別のレジャーです。そのテスト資産でMainnetの請求は支払えません。{s3}には実資産と実害があります。Devnetには実験的な変更が含まれることがあり、そこでの成功はMainnetで使えることを示しません。実験で本物の秘密情報を使い回さないでください。実装の前に{s4}と、対象のamendmentの実際の状態を確認してください。
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
- Current translation: 漏れたシード（seed）は、永久に危険にさらされたとみなしてください。
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
- Current translation: レッスン1の資産仕様を持ってきてください。公開の識別子と秘密の違いを知っておいてください。下の架空の記録だけで、すべての演習を完了できます。エクスプローラーを開くかは任意です。
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
- Current translation: シード（seed）はリセットできますか？
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
- Current translation: 入力、利用者に見せる想定メッセージ、保存状態、復旧を入れた失敗表を作ってください。拒否、誤った署名者・ネットワーク・資産・受取人、不足した引渡し、リクエストの期限切れ、ネットワーク障害、重複コールバック、再起動、古いデータを含めてください。それぞれについて、決して起きてはならないことを書いてください。偽の領収、権利の二重付与、黙った2回目の支払いです。
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
- Current translation: アプリのパスワードを変えると、漏れたシード（seed）は直りますか？
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
- Current translation: レッスン1の各アカウントに箱を描いてください。それぞれの下に、有効なマスター署名、レギュラーキー（regular key）、署名者リスト（signer list）の経路を別々に書いてください。公開記録が質問に答えないなら、不明と加えてください。地図を完成させるために、誰の秘密も求めないでください。
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
- Current translation: 家族のアクセス計画と、レジャーの署名権限は別の層です。秘密を出さずに、両方を記録してください。
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
- Current translation: フリーズ（freeze）はトークンの移動を制限します。クローバック（clawback）は、その機能が有効なとき、発行者トークンの残高を回収できます。どちらもネイティブのXRPには適用されません。
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
- Current translation: バックエンドのAPI秘密を、ブラウザのコードの外に置いてください。アプリケーションに合った、文書化されたXaman連携の形を使ってください。これらのページには、ウォレット接続も、QRの署名リクエストも、送信操作もありません。
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
- Current translation: シード（seed）はオフラインで、非公開にしてください。
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
- Current translation: まず学び、調べてください。このページでは、ウォレット接続、シード（seed）の入力、署名、トランザクションはありません。
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
- Current translation: カストディ、シード（seed）、署名、入金、アカウント管理、復旧の限界を学ぶ。
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
- Current translation: 取り消せない選択、または順序に敏感な選択に印を付けてください。No Freezeは元に戻せません。トラストライン（trust line）のクローバック（clawback）は、発行者がオーナーディレクトリを埋める前に、そのアカウント要件のもとで意図的に有効にする必要があります。発行者があとから自由に追加できる復旧ボタンではありません。実装の前に、現行の正確なAccountSetの規則を確認してください。
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
- Current translation: 管理、カストディ、シード（seed）、署名、入金、復旧、そして人からすべてを奪う誤り。
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
- Current translation: 見知らぬウェブサイトに、シード（seed）を入力しないでください。
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
- Current translation: いいえ。レギュラーキー（regular key）は、広い権限を持つ署名経路のままです。その存在と署名者リスト（signer list）を調べ、どの操作がまだ可能かを記録してください。アカウント構成の公開証拠は、誰かが秘密をどれだけ安全に保管しているか、秘密鍵が本当に未知かを証明できません。
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
- Current translation: 一致しない支払いはアクセスを開けず、重複は二重に付与できず、期限切れとネットワーク障害は復旧し、記録は再起動を生き延びることを示してください。正確な公開差分、アカウント権限、手数料の開示を確認し、バックアップと復元、ロールバックをリハーサルし、サポートと監視を割り当ててください。順調な経路の支払い1回は、完全な受け入れではありません。
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
- Current translation: 秘密のシード（seed）
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
- Current translation: シード（seed）の共有：
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
- Current translation: シード（seed）
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
- Current translation: シード（seed）、鍵、署名
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
- Current translation: 復旧の層を分けてください。ページを戻すと、悪いボタンを隠せます。データベースを復元すると、より新しい正当な領収を失うことがあります。どちらもレジャーの移転は取り消しません。バックアップの境界、復元の確認、バックアップ時点よりあとのトランザクションを照合がどう残すかを記録してください。
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
- Current translation: {s1} 誰かがシード（seed）を求めてきます。
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
- Current translation: ここから始めてください。公開のアカウントアドレスと、非公開の署名の秘密を区別できるようになってください。それが不慣れなら、まずウォレットの基本を読んでください。必要なのはノートだけです。アカウントも、資金も、コーディングの道具も不要です。
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
- Current translation: アカウントを支配していることを証明する秘密の権限です。鍵を支配する人が、アカウントを支配します。
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
- Current translation: 秘密と、正規の注文確認が属する、アプリケーションのサーバー側です。
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
- Current translation: 別のテストアカウントと、本番以外のネットワークを使ってください。拒否された署名、期限切れ、資金またはリザーブ（reserve）の不足、誤ったネットワーク、利用できないRPC、重複コールバックをリハーサルします。秘密はフロントエンドの資産とログの外に置いてください。実際のネットワークについて、現行のウォレット対応とamendmentの可用性を確認してください。文書のページは、どこでも有効になった証拠ではありません。
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
- Current translation: 紙の上で復旧のシナリオを書いてください。署名者1人が不在、2人が不在、1人が危険にさらされた、レギュラーキー（regular key）の保管者が不在です。どの操作がまだ可能か、運用を止める判断を誰がするかを述べてください。レジャーの外で2人の承認を要する私的な約束は、レジャーによる強制と同じではありません。
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
- Current translation: シード（seed）はパスワードではありません。レジャーの向こうに、リセット窓口はありません。
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
- Current translation: コールバックは、バックエンドがペイロードの結果を取得する理由であり、盲目的に信頼してよい証明ではありません。解決済みか署名済みか、想定したアカウント、意図したネットワークを確認してください。レジャーのトランザクションなら、そのトランザクションハッシュを調べ、検証、結果、意図した操作そのものを確かめてください。署名されたリクエストでも、失敗したり、レジャー上で未解決のまま残ったりすることがあります。
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
- Current translation: 架空のクラブが、1,000 CLUBクレジットを提案しています。公開シートにはロゴとティッカーがありますが、発行者アドレス、償還方針、署名権限はありません。メンバーが資産を識別したり、約束を判断したりする前に、何を追加する必要がありますか？
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
- Current translation: 十分な署名者の重みを必要とするマルチシグ（multisigning）の設定です。
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
- Current translation: あるプロジェクトは「マスターキー（master key）を無効にしたので、誰も何も変更できない」と言います。そのアカウントには、有効なレギュラーキー（regular key）がまだあります。その結論は支えられていますか？
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
- Current translation: レギュラーキー（regular key）は、別の署名経路です。
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
- Current translation: サポートのメッセージは、上限が100しかないので25クレジットが止まっていると言い、無制限の上限へ署名するよう求めています。その説明は、この例からは導けません。まず、正確な失敗、発行者とネットワーク、認可、フリーズ（freeze）、宛先、意図した操作を調べてください。上限を上げることは、トークンの問題一般を直す方法ではありません。
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
- Current translation: 使えるアカウントの署名権限を取り除こうとする試みです。安全評価ではなく、制御を永久に失う判断として扱ってください。
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
- Current translation: エクスプローラーが、公開のトラストライン（trust line）を見るためだけに署名を求めています。読むために必要ですか？
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
- Current translation: その作業にトラストライン（trust line）がそもそも必要かを尋ねてください。公開記録を読むのに署名は不要です。ネイティブのXRPを受け取るのにトラストラインは不要です。広告が必須と書いているからといって、設定を追加しないでください。
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
- Current translation: リクエストが存在する前に、保存する意図を書いてください。顧客またはセッション、想定する操作、必要な場合の想定する署名者、宛先、ネットワーク、資産、金額、振り分けタグがあればそれ、期限、注文参照です。欄に入力されたウォレットアドレスは、支配の証明ではありません。
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
- Current translation: リクエストの識別子を、バックエンド上のO-17に結びつけてください。通知が来たら、ペイロードの結果を取得し、その記録と照合します。想定した署名者とネットワークを確認してください。SignInでは、結びつけた証明とセッションを確認します。受け取ったことにする支払いトランザクションはありません。
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
- Current translation: 内容を見ないQR：
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
- Current translation: 内容を見ない署名（blind signing）：
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
- Current translation: 委任された権限も確認する
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
- Current translation: 意図した識別情報と方針と照合してください。アカウントの支配が必要な場面では、誤った署名者を拒否します。注文の所有者を黙って付け替えないでください。
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
- Current translation: マスター署名を無効にすると、レギュラーキー（regular key）も無効になりますか？
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
- Current translation: 架空のIssuer Aは、マスター署名が無効で、レギュラーキー（regular key）が割り当てられ、重み1ずつ、クォーラム（quorum）2の3人からなる署名者リスト（signer list）を持っています。これは点検の例であり、推奨する構成ではありません。
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
- Current translation: 署名者リスト（signer list）の経路では、重み1の署名者なら2人でクォーラム（quorum）2に達し、1人では達しないと計算してください。次にレギュラーキー（regular key）の経路を囲んでください。それは代替の署名経路です。別の単一鍵の経路が残っているあいだ、2人の署名者リストは、すべてのトランザクションを2人の管理に強制しません。
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
- Current translation: 読み取り専用のエクスプローラーで、公開アカウントを調べてください。アカウントのフラグ（flags）、レギュラーキー（regular key）、署名者リスト（signer list）、そのネットワークが対応する委任の記録を探します。名前の解釈には、リンクされた公式の定義を使ってください。公開の事実だけを、観察時刻とともに記録します。エクスプローラーにパネルがないことは、権限の経路が存在しない証明ではありません。完全なレジャーデータを使うか、その項目は未解決のままにしてください。
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
- Current translation: 署名せずに公開情報を調べてください。発行者の完全なアドレスとネットワーク、なぜトラストライン（trust line）が必要か、提案された上限とフラグ（flags）、発行者の認可とフリーズ（freeze）の制御、リザーブ（reserve）への影響を確認します。公開のウォレット照会は、トラストラインを与えることを必要としません。大きな上限は、品質の合図ではありません。
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
- Current translation: 署名者の重み、クォーラム（quorum）、認可された署名者の識別情報、意図したアカウントとネットワークを調べてください。応急処置として、クォーラムを弱めたり、別の鍵を有効にしたりしないでください。
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
- Current translation: 発行者、運用アカウント、有効なマスター署名、レギュラーキー（regular key）、署名者リスト（signer list）を列挙してください。レギュラーキーは、ほとんどのアカウント操作を認可できます。読み取り専用のAPI資格情報ではありません。マスター署名を無効にしても、他のすべての署名経路がなくなった証明にはなりません。
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
- Current translation: マスターキー（master key）
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
- Current translation: マスターキー（master key）
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
- Current translation: 発行者の確認、フィッシングへの防御、署名の確認、カストディのリスク、そして何かがうまくいかないときの対処。
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
- Current translation: マルチシグ（multisigning）
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
- Current translation: No Freezeは、個別フリーズとディープフリーズの権限、およびグローバルフリーズを解除する能力を永久に手放します。どんな制限も決して存在し得ないという一般的な約束ではありません。ブラックホール化（blackholing）は、使える署名権限を取り除くことを目指します。どちらのラベルも、公正な配布、流動性、裏付け、安全なアプリケーションコードを証明しません。バッジに頼らず、実際のアカウント設定とすべての署名経路を調べてください。
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
- Current translation: 公式の権限委任の案内と、現行の警告
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
- Current translation: 読み取り専用のエクスプローラーで、意図したネットワークを選び、完全なNFTokenIDを検索してください。現在の所有者、発行者、taxon、フラグ（flags）、URIを見つけてください。エクスプローラーが説明しないなら、リンクされたトランザクション参照を使ってフラグを読み解いてください。観察時刻と、分かればレジャーを記録します。遠隔のメタデータリンクは、信頼できない内容として扱ってください。絵を見るためにリクエストへ署名しないでください。
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
- Current translation: クォーラム（quorum）
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
- Current translation: レギュラーキー（regular key）
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
- Current translation: レギュラーキー（regular key）
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
- Current translation: レギュラーキー（regular key）とマルチシグ（multisigning）
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
- Current translation: レギュラーキー（regular key）
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
- Current translation: レギュラーキー（regular key）と署名者リスト（signer list）の設定を見直す。
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
- Current translation: 適切なときに、レギュラーキー（regular key）または署名者リスト（signer list）をローテーションする。
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
- Current translation: 権限マップと、平易な言葉の制御の開示を保存してください。レギュラーキー（regular key）が2対3の例をどう変えるかを、別の人に説明してもらってください。説明できないなら、署名の流れのレッスンへ進む前に、説明を改善してください。
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
- Current translation: 開示の中で、フリーズ（freeze）、認可、クローバック（clawback）、署名権限を分けてください。
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
- Current translation: 署名者リスト（signer list）
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
- Current translation: マルチシグのトランザクションに必要な、署名者の重みの合計の最小です。
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
- Current translation: ウェブサイトは、マスター署名が無効なので誰も資産を変えられないと言います。あなたの地図にはレギュラーキー（regular key）があります。その主張を、有効な経路と残る能力の正確な記述に置き換えてください。誰も鍵を知らないと主張する証拠も、チームの保管の仕方を認定する証拠も、あなたにはありません。
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
- Current translation: これは点検の演習であり、ブラックホール化（blackholing）の手順書ではありません。このレッスンに従いながら、鍵を無効にしたり、取り消せないフラグ（flags）を設定したり、署名者を外したりしないでください。
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
- Current translation: 2対3の署名者が、有効なレギュラーキー（regular key）と並んで存在します。すべての操作は2人を通りますか？
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
- Current translation: レッスン1の正確な資産の識別情報を使ってください。トラストライン（trust line）は、従来の代替可能トークンのモデルに属します。これはNFTの購入でも、ネイティブXRPの設定でもありません。このワークシートに署名は不要です。
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
- Current translation: ネットワークが権限の委任に対応している場合、アカウントは別のアカウントに、指定した操作を行うことを認可できます。委任先は、レギュラーキー（regular key）とも、所有者アカウントの署名者とも同じではありません。実際の権限の確認には、既存の委任記録とその正確な権限を含めてください。3つの鍵の経路だけを含む地図は、不完全かもしれません。この機能を使う前に、現行のamendment対応と、公式の権限ごとの警告を確認してください。このコースは委任を設定しません。
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
- Current translation: 3つの列で利用者向けの開示を書いてください。能力、現在の証拠、運用方針です。例：レギュラーキー（regular key）がある / 観測したアカウント欄 / クラブは2人のスタッフがその使用を承認すると言う。最後の列は方針であり、プロトコルの保証ではないとラベルしてください。
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
- Current translation: XRPLは、アカウントが日常の署名をマスターキー（master key）から分け、複数の署名者を必要とすることを可能にします。
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
- Current translation: はい。署名者リスト（signer list）が他のすべての鍵を上書きする
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
- Current translation: 宛先タグ（destination tag）
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
- Current translation: 宛先タグ（destination tag）とメモ
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
- Current translation: 支払いでは、受取人、資産の識別情報、引き渡された金額、必要な宛先タグ（destination tag）または参照を、保存した意図と照合してください。部分支払いは、要求した金額を領収として使うことを危険にします。メタデータのdelivered_amountを調べてください。トランザクションを一度記録し、繰り返すコールバックが2つ目の権利を付与できないようにします。レジャーの証拠が不明、または利用できないあいだは、保留のままです。
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
- Current translation: 支払い、宛先タグ（destination tag）、トラストライン（trust line）、トークン取引、NFT、オファー、約定を学ぶ。
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
- Current translation: 宛先タグ（destination tag）は何をしますか？
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
- Current translation: 2. トラストライン（trust line）が不要な資産はどれですか？
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
- Current translation: 宣伝ページが、見慣れたティッカーのトークンへ、無制限のトラストライン（trust line）を追加するよう求めています。あなたはプロジェクトを調べたかっただけです。次に何をすべきですか？
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
- Current translation: トラストライン（trust line）は、1つの通貨についてアカウント間の関係を記録します。ここでの「トラスト」は、発行者が安全だと承認されたという意味ではありません。
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
- Current translation: トラストライン（trust line）は、1つの特定の通貨コードについて、2つのアカウントの間にあるレジャー上の関係です。
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
- Current translation: {s1} トラストライン（trust line）は、トークンが安全だと証明する。{br2}{s3} それは、そのトークンを保有するために必要なアカウントの関係を作るだけです。
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
- Current translation: トラストライン（trust line）は、特定の発行者につながる発行資産を、あなたのアカウントが保有してもよいとXRPLに伝えます。上限や他の設定を含められます。$XRPはレジャーのネイティブ資産なので、トラストラインを使いません。
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
- Current translation: トラストライン（trust line）を有効にし、関係ができる様子を見てください。
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
- Current translation: トラストライン（trust line）を作る
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
- Current translation: トラストライン（trust line）を作ることは、資産を保有する許可です。推奨、投資の保証、セキュリティ審査ではありません。
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
- Current translation: 通貨コード、発行者、供給、トラストライン（trust line）、管理。
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
- Current translation: トラストライン（trust line）は有効です。このウォレットは今、上限と設定の範囲で、この発行者のTOKEN資産を保有できます。
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
- Current translation: トラストライン（trust line）を作る
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
- Current translation: トラストライン（trust line）はありません。このウォレットは、この発行者のTOKEN資産を保有できません。
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
- Current translation: トラストライン（trust line）を外す
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
- Current translation: ネイティブのXRPを受け取るのに、トラストライン（trust line）は必要ですか？
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
- Current translation: トラストライン（trust line）は安全性を証明しますか？
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
- Current translation: XRPにトラストライン（trust line）が不要な理由と、ティッカーだけでは不十分な理由を説明する。
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
- Current translation: まずネットワークと、正確な資産の識別情報を確認してください。表示の対応と、レジャー上の存在は別です。ロゴを出すために、トラストライン（trust line）を繰り返して作ったり、お金を送ったりしないでください。
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
- Current translation: このモデルでは、保有者がトラストライン（trust line）を作り、発行者がその保有者へ発行通貨を送ります。トラストラインだけではトークンは配られません。残高を発行者へ戻すと、流通中の量が減ります。トラスト上限はプロジェクト全体の供給上限ではなく、ウェブサイト上の供給の約束はレジャーによる強制ではありません。資産を宣伝する前に、発行、償還、残る権限を説明してください。
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
- Current translation: 発行者の認可は、必要な場合に、誰がその通貨を保有できるかを制御します。個別フリーズ（individual freeze）は、トラストライン（trust line）を通じた支出を制限します。ディープフリーズ（deep freeze）は受取の制限を加えますが、発行者からの直接の例外があります。グローバルフリーズ（global freeze）は、より広い効果を持ちます。これらのトークン制御は、ネイティブのXRPをフリーズ（freeze）しません。クローバック（clawback）は別の機能であり、別に開示すべきです。フリーズの別名ではありません。
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
- Current translation: XRP Ledger、ウォレット、アカウント、発行者、トラストライン（trust line）、リザーブ（reserve）、トークン、トランザクション、DEX、AMM、NFT、そしてそれらがどうつながるかを理解する。
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
- Current translation: トラストライン（trust line）は、1つの通貨についてアカウント間の関係を記録します。ここでの「トラスト」は、発行者が安全だと承認されたという意味ではありません。
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
- Current translation: トラストライン（trust line） | 開発者ハブ | XRPL LAYMAN
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
- Current translation: 支払い、タグ、トラストライン（trust line）、オファー、AMM、NFT、そしてXRPLのトランザクションがどう約定するか。
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
- Current translation: トラストライン（trust line）はありません。
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
- Current translation: トラストライン（trust line）は不要
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
- Current translation: 所有トラストライン（trust line）
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
- Current translation: Payment、トラストライン（trust line）、オファー、NFTオファー、それともアカウント設定？
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
- Current translation: トラストライン（trust line）
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
- Current translation: トラストライン（trust line）
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
- Current translation: トラストライン（trust line）：
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
- Current translation: {s1}トラストライン（trust line）
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
- Current translation: 通常はトラストライン（trust line）が必要
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
- Current translation: トラストライン（trust line）の可視化
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
- Current translation: トラストライン（trust line）
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
- Current translation: トラストライン（trust line）
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
- Current translation: TrustSetは、トラストライン（trust line）の関係を作るか変更します。そのLimitAmountは、通貨、相手の発行者、上限を識別します。ネイティブのXRPはトラストラインを使いません。このレッスンが扱うのはトラストライントークンであり、MPTの認可ではありません。
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
- Current translation: トラストライン（trust line）が意味しないこと
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
- Current translation: トラストライン（trust line）とは何ですか？
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
- Current translation: XRPはネイティブです。トラストライン（trust line）は発行通貨を説明します。
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
- Current translation: あなたのアカウントは通常、正確な発行者と通貨へのトラストライン（trust line）が必要です。
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
- Current translation: 基本リザーブ（reserve）1 $XRP
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
- Current translation: 売却は通常、NFTオファーとその承諾を使います。オファーを作ることは、完了した支払いでも引き渡しでもありません。承諾の前に、正確なNFT、支払い資産、金額、宛先の制限、期限、発行者の移転手数料を確認してください。NFTの移転手数料は0.001%単位です。たとえば1,000は1%を表し、1,000 XRPではありません。適用されるかは移転によります。その後、検証済みの結果と所有を確認してください。
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
- Current translation: AMM手数料 %
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
- Current translation: アカウントは、現在のリザーブ（reserve）を満たすだけの$XRPを受け取ると、レジャー上で有効になります。
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
- Current translation: NFTが、常に所有者リザーブの項目1つに対応するわけではありません。XRPLはNFTをNFTokenPageオブジェクトに格納し、1ページに複数のNFTを入れられます。個々のNFTを、個々のリザーブオブジェクトとして数えないでください。
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
- Current translation: XRPLのNFTは、独自の識別子、フラグ（flags）、発行者、taxon、シーケンス、任意の移転手数料を持つ、レジャー上の一意のトークンです。
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
- Current translation: 現在のリザーブ（reserve）規則
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
- Current translation: 基本リザーブ（reserve）1 $XRP + 所有オブジェクト {objects} 個 × 0.2 $XRP。
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
- Current translation: 基本リザーブ（reserve）1 $XRP + 所有オブジェクト {objects} 個 × 0.2 $XRP。
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
- Current translation: {s1} 残高、上限、制御、リザーブ（reserve）を区別します。
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
- Current translation: 単純なアカウントのリザーブ（reserve）を見積もってください。実際の所有とリザーブの振る舞いは、オブジェクトの種類によって異なり得ます。
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
- Current translation: {s1} 表示された$XRPはすべて使える。{br2}{s3} 一部は、アカウントと所有者のリザーブ（reserve）に必要かもしれません。
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
- Current translation: 手数料
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
- Current translation: フラグ（flags）、URI、taxon、オファー、移転手数料、ライフサイクル。
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
- Current translation: © 2026 House of Cauliman. 無断転載を禁じます。
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
- Current translation: 架空の、提案された売却を調べてください。NFT Record N、価格20 XRP、制限された受取人Member C、示された期限です。NFTの移転手数料欄1,000は1%を表します。適用される20 XRPの売却では、それは0.2 XRPです。表示された価格がすべて売り手の手取りだと仮定せず、実際の売却の仕方と決済の計算を確認してください。
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
- Current translation: 手数料は異常ですか？
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
- Current translation: レジャーオブジェクトは、アカウントが必要とするXRPのリザーブ（reserve）に影響することがあります。リザーブの規則と金額は変わることがあり、トラストライン（trust line）には例外があります。すべてのラインが同じ費用だと仮定せず、現在のネットワーク規則を確認してください。上限をゼロにしても、ゼロでない残高は消えず、すぐ外れることも保証されません。外せるラインは、レジャーの既定状態の条件を満たす必要があります。
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
- Current translation: Mainnetは現在、{s1}に、{s2}を加えたものを使います。これらの値はバリデータの手数料投票で変わることがあるため、ソフトウェアは恒久的に固定せず、ネットワークへ問い合わせるべきです。
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
- Current translation: 架空の近所のクラブは、メンバーがクレジットでワークショップの席を予約できるようにしたいと考えています。この同じプロジェクトをコース全体で使ってください。Issuer Aのようなラベルは紙のラベルであり、使えるアドレスではありません。要点は、誰かが資産を作る前に、欠けている判断を見つけることです。
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
- Current translation: リザーブ（reserve）と除去を計画する
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
- Current translation: トークン数量とは別に、リザーブ（reserve）の点検を計画してください。実際の道具を実装するときは、ネットワークの現在の基本リザーブと増分リザーブ、およびアカウントに関係する所有者オブジェクトを取得してください。見えるトークン残高のすべてに、固定のXRP料金を掛けないでください。トラストライン（trust line）や他のオブジェクトの規則には例外があります。
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
- Current translation: {s1} 設定の変更を、お金を受け取ることと混同せずに、残高、上限、発行者の制御、リザーブ（reserve）への影響を読みます。
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
- Current translation: リザーブ（reserve）計算機
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
- Current translation: リザーブ（reserve）
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
- Current translation: リザーブ（reserve）
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
- Current translation: プロダクトの収益を、XRPLのネットワーク手数料と分ける。
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
- Current translation: 技術参照の確認日は2026年10月3日です。ネットワークのamendment、ウォレットの対応、リザーブ（reserve）の規則は変わることがあります。実際のトランザクションを実装する前に、現行の文書を確認してください。
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
- Current translation: クラブは今、任意の記念NFTを提案しています。クレジットとは別です。この架空の記録を使ってください。ネットワークはTestnet、NFTの識別情報はRecord N、発行者はIssuer A、所有者はMember B、移転可能ははい、バーン（burn）可能ははい、変更可能ははい、移転手数料欄は1,000、URIはHTTPSのメタデータページです。これらは説明の欄であり、トランザクションJSONではありません。
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
- Current translation: {s1} ネットワーク手数料はバリデータへ行く。{br2}{s3} XRPLのトランザクションコストは破棄されます。
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
- Current translation: 合計残高は、リザーブ（reserve）と手数料の必要を上回って使えるXRPと同じではありません。無関係な設定を変える前に、正確な結果と現在のリザーブ規則を確認してください。
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
- Current translation: 移転手数料
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
- Current translation: 取引サイズは、手数料 {fee}% の前で、選択したプール側の {pct}% です。
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
- Current translation: リザーブ（reserve）とトランザクションコストに使われる
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
- Current translation: 一部の$XRPがリザーブ（reserve）に残る理由
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
- Current translation: 1ページの公開契約を書いてください。利用者の結果、範囲、識別情報、制御、手数料、限界です。
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
- Current translation: 償還の約束を書いてください。1クレジットは、書かれた予約条件のもとで、対象となる席を1つ予約します。取消、期限、返金、サポート、クラブが閉じたときの扱いを決めてください。トークンの仕組みは、それらの事業条件をあなたのために書いたり、強制したりはしません。
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
- Current translation: 問題、想定する利用者、役に立つ最小の結果を書いてください。正確な資産の識別情報、アカウントの役割、残る発行者の権限、プロダクトの手数料、ネットワークの費用を公開します。試作、テストネットワークのリハーサル、動くMainnetの機能を区別してください。確立できない利益、永久の可用性、セキュリティの保証を約束しないでください。
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
- Current translation: アカウントと関係するレジャーオブジェクトを支えるために、利用できるまま残さなければならないXRPです。トランザクション手数料とは違います。
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
- Current translation: AMMとスリッページ
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
- Current translation: AMMはプールに2つの資産を保有し、プールの残高からスワップの価格を決めます。
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
- Current translation: DEX、オファー、AMM
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
- Current translation: 価格、流動性、スリッページ、発行者の制御、集中、循環、そして痛むまで人が無視するリスク。
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
- Current translation: 簡単なスリッページの図
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
- Current translation: スリッページとプールの深さ
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
- Current translation: スリッページ
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
- Current translation: XRPLのDEXは、ある資産を別の資産と交換するためにオファーを使います。
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
- Current translation: 出品文は「永久の収集品」と言っています。NFTは変更可能で、画像は普通のウェブサーバー上にあり、売り手はNFTokenIDではなくスクリーンショットを見せています。どの主張が、まだ証明されていませんか？
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
- Current translation: バーン（burn）
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
- Current translation: バーン（burn）、移転、URI変更の権限を確認してください。既定を仮定せず、不確実な点を書いてください。
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
- Current translation: 公開で見られる例を選び、ウォレットを接続せずに、そのNFTokenID、発行者、所有者、taxonを見つけてください。
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
- Current translation: 紙の上で資産モデルを選んでください。交換可能なクレジットは代替可能なトークンを示唆します。別に識別できる会員の収集品1つはNFTを示唆します。この演習では、従来のトラストライン（trust line）トークンと記録してください。MPTsは別の標準であり、同じ設定の別名ではありません。
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
- Current translation: ミント、バーン（burn）、オファー
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
- Current translation: ミントはNFTを作ります。バーン（burn）はそのレジャートークンを破棄します。オファーは交換を提案し、承諾されないまま残ることがあります。
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
- Current translation: NFTokenMintは重要なフラグ（flags）を設定します。Transferableは、通常の保有者同士の移転を許可します。それがない場合、発行者に関係する移転には特別な制限があります。Burnableは、発行者またはその認可された相手にバーン（burn）の権限を与えます。所有者は自分のNFTをバーンできます。変更可能なNFTは、発行者または認可されたミンターがNFTokenModifyを通じてURIを更新できます。すべてのNFTのメタデータ参照が固定だと仮定しないでください。
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
- Current translation: NFTokenModifyの権限は、通常の所有とは別です。
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
- Current translation: NFTは、ミント、オファー、承諾、移転、バーン（burn）のトランザクションを通じて動きます。
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
- Current translation: 所有だけでは、編集の許可になりません。変更可能なNFTでは、NFTokenModifyは発行者または認可されたミンターに限られます。ネットワークのamendmentとウォレットの対応も関係します。
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
- Current translation: ネットワーク、NFTokenID、発行者、現在の所有者、taxonを記録してください。taxonは、発行者からの関連するNFTをグループ化します。希少性の証明でも、コレクションが完成したという約束でもありません。所有とミントは別の役割です。
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
- Current translation: 残高の制限を、クローバック（clawback）やNFTのバーン（burn）と分けてください。使われている正確な資産標準と制御を尋ねてください。
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
- Current translation: NFTが移転可能か、発行者がそれをバーン（burn）できるかを制御し得る設定です。
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
- Current translation: クラブはこの収集品を永久と呼んでいますが、例はURIの変更と、発行者が認可したバーン（burn）を明示的に許しています。主張を次のように書き直してください。開示された発行者の制御と、外部でホストされた内容を持つ、移転可能な収集品です。保存計画とライセンスは別に述べてください。より明確な約束は、永久のバッジより役に立ちます。
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
- Current translation: スクリーンショットはNFTを識別しません。そのネットワークとNFTokenIDを取得し、発行者と所有者を調べ、その後フラグ（flags）とURIを調べてください。変更可能なメタデータと外部ホスティングには、開示と保存計画が必要です。レジャー上の所有は、著作権を自動的に移さず、画像が永久に利用できることも証明しません。
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
- Current translation: メンバーが、同じクラブロゴの資産を2つ見ています。1つはIssuer Aから、もう1つはIssuer Cからです。正しい判断は、よりきれいな画像を選ぶことではなく、完全な識別情報をクラブの仕様と照合することです。一致した資産でも、償還と権限の確認は別に必要です。
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
- Current translation: 管理の列を追加してください。発行者の認可が必要か、付与されているか、フリーズ（freeze）の制限があるか、関係するリップリング（rippling）の設定は何かをメモします。不明は有効な結果です。推測した既定値ではなく、証拠が必要だという意味です。
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
- Current translation: 発行者が、保有者がその通貨を保有する前に認可を求めることがあります。フリーズ（freeze）の設定は資産を制限できます。リップリング（rippling）は、支払いの一部として、互換性のあるトラストライン（trust line）の関係を通じて価値を動かすことがあります。No Rippleの設定は、どの経路を使えるかに影響します。それらはトークンを安全にしたり、発行者リスクをなくしたりはしません。既定を変える前に、アカウントとラインの両方の設定を確認してください。
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
- Current translation: ブラックホール（blackhole）の状態
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
- Current translation: プロジェクトの識別情報と権限のメモを持ってきてください。このレッスンにウォレットは不要です。あとで連携を実装するなら、別のテスト環境と、現行の公式Xaman文書を使ってください。
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
- Current translation: 発行者は、トークンのフリーズ（freeze）制御で、ネイティブのXRPをフリーズできますか？
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
- Current translation: 作っただけでは、買い手も、市場価格も、償還の資金も生まれません。実際の市場の厚みと、公開された償還条件を調べてください。支えのない価格を、保証された価値として説明しないでください。
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
- Current translation: 発行トークンをフリーズ（freeze）すると、発行者は保有者のネイティブXRPをフリーズできますか？
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
- Current translation: 解説例を見ずに答えを説明し、その後で比べてください。推測したなら、関係する節に戻ってください。チェック欄とクイズの結果は、このページだけに残ります。プロジェクトメモは自分で保管してください。
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
- Current translation: 架空の近所のクラブを、ワークショップのクレジットから収集品、予約の流れまで追ってください。各レッスンには、定義、案内付きの紙のワークシート、解説済みの判断、よくある誤り、説明付きの質問があります。レッスンを読み、答えを見る前にワークシートに取り組み、できたメモのページを残してください。アカウントも、得点の証明書も、保存される学習プロフィールもありません。
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
- Current translation: フリーズ（freeze）の制御
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
- Current translation: フリーズ（freeze）が、トークンを破棄すると説明されている
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
- Current translation: フリーズ（freeze）の種類とNo Freeze
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
- Current translation: フリーズ（freeze）とクローバック（clawback）
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
- Current translation: フリーズ（freeze）
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
- Current translation: 読み取り専用のエクスプローラーのアカウント表示で、発行残高またはトラストライン（trust line）の節を開いてください。正確な通貨と相手の発行者を見つけ、残高、上限、表示されているフリーズ（freeze）、認可、リップリング（rippling）の欄を比べてください。誰の視点で表示されているかを特定します。画面に欄がなければ、無効と仮定せず、表示なしと書いてください。適切な記録がなければ、学習ワークシートは架空のままでかまいません。
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
- Current translation: 対話的な結果にはJavaScriptが必要です。レッスンの内容と、上の解説済みの答えは、そのまま使えます。
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
- Current translation: 確認者が必要とする証拠を列挙してください。正確な資産の識別情報、誰が発行または制御を変えられるか、配布の記録、償還条件、主張された上限の仕組み、まだ不明なことです。アカウントが変更できないと仮定せず、権限の節はレッスン4で完成させてください。
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
- Current translation: トークンの制御を、鍵とは別に列挙してください。必要な認可、個別・ディープ・グローバルのフリーズ（freeze）、No Freeze、クローバック（clawback）の機能です。保有者への効果と、調べた証拠を説明してください。1つのトークン関係への制限を、XRPやすべての資産への制限に読み替えないでください。
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
- Current translation: Xamanの流れ | 開発者ハブ | XRPL LAYMAN
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
- Current translation: NEBの公開ページは、将来の取引システムを説明しています。そのプレビューは、ライブの情報や約定の証拠ではありません。
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
- Current translation: 理解していない警告を消すためだけに、リップリング（rippling）、フリーズ（freeze）、認可のフラグ（flags）を変えないでください。成功したTrustSetは設定の変更であり、購入でも安全の推奨でもありません。
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
- Current translation: フィッシングと、偽の接続の流れ
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
- Current translation: 償還
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
- Current translation: 不確実なトランザクションをリハーサルしてください。ハッシュはあるが、照会では見つかりません。元の意図と、限りのある期限の証拠を残してください。含まれなかったと結論する前に、照会したサーバーが必要な履歴を持ち、関係するレジャーの境界を過ぎたかを尋ねてください。1回の照会が空だったことだけを理由に、新しい支払いを出さないでください。
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
- Current translation: 目的、選んだ標準、ネットワーク、識別情報、償還条件、供給の計算、未解決の権限の質問を入れた、1ページの資産仕様を保存してください。レッスン2では別の収集品を加えます。クレジットと収集品を同じ資産として扱わないでください。
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
- Current translation: 詐欺師は、あなた自身にトランザクションを認可させることができます。
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
- Current translation: XRPLを、アプリの下にある共有データベースだと考えてください。Xaman、取引所、エクスプローラー、ゲーム、マーケットプレイスは画面です。レジャーが、それらが読み書きしている記録です。
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
- Current translation: このレッスンは、従来のトラストライン（trust line）トークンのモデルに従います。XRPLには、識別子と機能が異なるMulti-Purpose Tokens（MPTs）もあります。標準は意図して選び、チュートリアルに従う前に、意図したネットワークとウォレットの対応を確認してください。これらのレッスンは、どちらの種類のトークンも作りません。
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
- Current translation: 出金のフリーズ（withdrawal freeze）
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
- Current translation: 退出計画を書いてください。保有残高を、意図した償還または移転の判断で解消し、その後、両側の既定でないライン設定を調べます。上限をゼロにするだけでは、ラインが消えた証明にはなりません。残高や、他の状態が、まだそれを残していることがあります。
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
- Current translation: {s1} 目的、正確な資産の識別情報、償還の約束、供給の質問を書きます。
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
- Current translation: Xamanの資格情報の境界
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
- Current translation: Xamanの流れ
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
- Current translation: Xamanの流れ：
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
- Current translation: {s1}Xamanの流れ
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
- Current translation: Xaman実装チェックリスト
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
- Current translation: Xaman実装の確認
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
- Current translation: Xamanペイロードの概念
- Approve:
- Correction:
- Reviewer:
- Date:
