# XRPL LAYMAN review package: العربية

This file is for a native speaker of العربية. You do not need the website source code, and you do not need to open the site. The English sentence and the current العربية translation are both in this file. The CSV next to this file has the same rows.

Nothing in this package is native-approved. The Approve, Correction, Reviewer, and Date lines are blank on purpose.

## How to review

1. Read one row at a time. The sections follow this order: wallet recovery and seed, signing, destination tags, trust lines, reserves and fees, DEX and AMM, NFTs, then other security and finance copy.
2. A sentence is filed under the first matching section. Seed wins over every later topic. A destination-tag sentence is in the destination-tag section even if it also mentions signing.
3. Decide whether a reader of العربية learns the same fact as the English, including every “not”, “never”, and “cannot”. A quiz answer that is false in English must stay false.
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
- Current translation: سر يستطيع الإنسان التعامل معه ويمكن اشتقاق المفاتيح منه. وليس كلمة مرور يمكنك إعادة تعيينها (seed).
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
- Current translation: تعيّن قائمة الموقّعين (signer list) أوزاناً ونصاباً (quorum). مثلاً، ثلاثة موقّعين مستقلين بوزن واحد ونصاب اثنين يتطلب تواقيع صالحة كافية لبلوغ اثنين. هذا يحمي مسار التوقيع (signing) المقصود فقط: راجع أيضاً أي مفتاح رئيسي (master key) أو مفتاح عادي (regular key) مفعّل. اختبر الاستعادة على شبكة غير إنتاجية قبل نقل السلطة.
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
- Current translation: حمولة Xaman (payload) هي طلب توقيع (signing). ينبغي أن يشرح منتجك أولاً الإجراء والشبكة وحساب التوقيع والأصل بالضبط والمستلم والمبلغ أو الصلاحيات. تسجيل الدخول يحدّد حساباً؛ وليس دفعة. لا تطلب من المستخدمين أبداً لصق بذرة (seed) أو أرقام سرية أو مفتاح خاص (private key) في صفحتك.
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
- Current translation: {s1} مادة تعليمية للقراءة فقط بأمثلة خيالية وتغذية راجعة محلية للاختبار. {s2} سجل منفصل للتدرب على التنفيذ لاحقاً؛ وأصوله التجريبية لا تدفع فواتير Mainnet. {s3} يحمل أصولاً حقيقية وعواقب. يمكن أن يتضمن Devnet تغييرات تجريبية؛ والنجاح هناك لا يثبت التوفر على Mainnet. لا تعِد استخدام الأسرار الحقيقية في التجارب. تحقق من {s4} ومن حالة التعديل (amendment) الفعلية للهدف قبل التنفيذ.
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
- Current translation: افترض أن البذرة (seed) المسربة مخترقة بشكل دائم.
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
- Current translation: أحضر مواصفة الأصل من الدرس 1. اعرف الفرق بين المعرّف العام والسر. تستطيع إكمال كل تمرين باستخدام السجلات الخيالية أدناه؛ وفتح مستكشف اختياري.
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
- Current translation: هل يمكن إعادة تعيين البذرة (seed)؟
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
- Current translation: أنشئ جدول فشل فيه المدخل ورسالة المستخدم المتوقعة والحالة المخزَّنة والاستعادة. أدرج الرفض، والموقّع أو الشبكة أو الأصل أو المستلم الخاطئ، والتسليم غير الكافي، وانتهاء الطلب، وانقطاع الشبكة، والإشعار الراجع (callback) المكرر، وإعادة التشغيل، والبيانات القديمة. لكل منها، اذكر ما يجب ألا يحدث أبداً: لا إيصال كاذب، ولا استحقاق مكرر، ولا دفعة ثانية صامتة.
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
- Current translation: هل يصلح تغيير كلمة مرور التطبيق بذرة (seed) مسربة؟
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
- Current translation: ارسم مربعاً لكل حساب من الدرس 1. تحت كل منها، اذكر بشكل منفصل التوقيع بالمفتاح الرئيسي (master key) المفعّل، والمفتاح العادي (regular key)، ومسار قائمة الموقّعين (signer list). أضف «غير معروف» إذا لم يجب السجل العام عن سؤال؛ ولا تطلب سر أي شخص لإكمال الخريطة.
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
- Current translation: تخطيط وصول العائلة وسلطة التوقيع (signing) على السجل طبقتان مختلفتان؛ وثّق الاثنتين من غير كشف الأسرار.
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
- Current translation: يقيّد التجميد (freeze) حركة الرموز؛ ويمكن للسحب (clawback) استرجاع رصيد رمز المُصدِر (issuer) عندما تكون القدرة مفعّلة. لا ينطبق أي منهما على XRP الأصلي.
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
- Current translation: أبقِ أسرار واجهة برمجة التطبيقات (API) الخاصة بالنظام الخلفي خارج الشيفرة البرمجية للمتصفح. استخدم نموذج تكامل Xaman موثقاً يناسب التطبيق. لا تتضمن هذه الصفحات اتصالاً بمحفظة، ولا طلب توقيع (signing) عبر QR، ولا إجراء إرسال.
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
- Current translation: احتفظ بالبذرة (seed) دون اتصال بالإنترنت وبسرية.
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
- Current translation: تعلّم وافحص أولاً. لا وصل محفظة ولا إدخال بذرة (seed) ولا توقيع (signing) ولا معاملات في هذه الصفحة.
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
- Current translation: تعلّم الحفظ (custody) والبذور (seed) والتوقيع (signing) والتمويل والتحكم في الحساب وحدود الاستعادة.
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
- Current translation: علّم الخيارات التي لا رجعة فيها أو الحساسة للترتيب. لا يمكن التراجع عن No Freeze. يجب تفعيل سحب خط الثقة (clawback) عمداً وفق متطلبات حسابه قبل أن يملأ المُصدِر (issuer) دليل المالك (owner directory)؛ وهو ليس زر استعادة يستطيع المُصدِر إضافته بحرية لاحقاً. تحقق من قواعد AccountSet الحالية بالضبط قبل التنفيذ.
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
- Current translation: التحكم والحفظ (custody) والبذور (seed) والتوقيع (signing) والتمويل والاستعادة والأخطاء التي تكلف الناس كل شيء.
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
- Current translation: لا تكتب بذرتك (seed) في موقع عشوائي.
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
- Current translation: لا. يبقى المفتاح العادي (regular key) مسار توقيع (signing) بصلاحيات واسعة. افحص وجوده وقائمة الموقّعين (signer list)، ثم وثّق الإجراءات التي تبقى ممكنة. دليل عام على إعداد الحساب لا يستطيع إثبات مدى أمان تخزين شخص لسر، أو ما إذا كان مفتاح خاص (private key) مجهولاً حقاً.
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
- Current translation: أثبت أن المدفوعات غير المطابقة لا تتيح الوصول، وأن تكرار الطلبات لا يضيف الرصيد مرتين، وأن النظام يتعافى من انتهاء الصلاحية وانقطاع الشبكة، وأن السجلات تبقى محفوظة بعد إعادة التشغيل. راجع التغييرات الدقيقة في الإصدار وسلطة الحساب والإفصاح عن الرسوم؛ وتدرّب على النسخ الاحتياطي والاستعادة والتراجع (rollback)؛ وحدّد المسؤولين عن الدعم والمراقبة. نجاح دفعة واحدة في المسار المعتاد لا يعني اجتياز اختبارات القبول كاملة.
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
- Current translation: بذرة سرية (seed)
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
- Current translation: بذرة (seed) مُشاركة:
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
- Current translation: بذرة (seed)
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
- Current translation: البذور (seed) والمفاتيح والتواقيع (signing)
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
- Current translation: افصل طبقات الاستعادة. إرجاع صفحة قد يخفي زراً سيئاً؛ واستعادة قاعدة بيانات قد تفقد إيصالات مشروعة أحدث؛ ولا يعكس أي منهما نقل السجل. وثّق حدود النسخ الاحتياطي والتحقق من الاستعادة وكيف تحفظ المطابقة (reconciliation) المعاملات بعد نقطة النسخ.
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
- Current translation: {s1} يطلب أحدهم بذرتك (seed).
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
- Current translation: ابدأ هنا. كن قادراً على تمييز عنوان حساب عام من سر توقيع (signing) خاص. إذا كان ذلك غير مألوف، اقرأ أساسيات المحفظة أولاً. تحتاج دفتراً فقط؛ لا حساب ولا أموال ولا أدوات برمجة.
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
- Current translation: السلطة السرية التي تثبت أنك تتحكم في الحساب. من يتحكم في المفاتيح يتحكم في الحساب.
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
- Current translation: جزء التطبيق على الخادم حيث تنتمي الأسرار وفحوص الطلب المعتمدة.
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
- Current translation: استخدم حسابات اختبار منفصلة وشبكة غير إنتاجية. تدرّب على التواقيع المرفوضة وانتهاء الصلاحية ونقص الأموال أو الاحتياطي (reserve) والشبكة الخاطئة وRPC غير المتاح والإشعارات الراجعة (callback) المكررة. أبقِ الأسرار خارج ملفات الواجهة الأمامية وسجلات التشغيل. تحقق من دعم المحفظة الحالي وتوفر التعديل (amendment) للشبكة الفعلية؛ وصفحة الوثائق ليست دليلاً على التفعيل في كل مكان.
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
- Current translation: اكتب سيناريوهات استعادة على الورق: موقّع واحد غير متاح؛ واثنان غير متاحين؛ وواحد مخترق؛ وحافظ المفتاح العادي (regular key) غائب. اذكر الإجراءات التي تبقى ممكنة ومن يقرر إيقاف العمليات. وعد خاص خارج السجل باشتراط موافقتين ليس نفسه إنفاذ السجل.
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
- Current translation: بذرتك (seed) ليست كلمة مرور. لا يوجد مكتب إعادة تعيين خلف السجل.
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
- Current translation: الإشعار الراجع (callback) سبب يدعو النظام الخلفي (backend) إلى جلب نتيجة الحمولة (payload)، وليس دليلاً يُوثق به دون تحقق. تحقق من حالة حسم الطلب وتوقيعه، ومن الحساب المتوقع والشبكة المقصودة. وبالنسبة إلى معاملة على السجل، ابحث عنها باستخدام تجزئتها وتحقق من اعتمادها في السجل، ومن نتيجتها، ومن مطابقتها للعملية المقصودة بالضبط. فالطلب الموقَّع قد يفشل أو يبقى غير محسوم على السجل.
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
- Current translation: يقترح نادٍ خيالي 1,000 رصيداً من CLUB. تذكر ورقة الإطلاق شعاراً ورمزاً مختصراً (ticker)، لكن من غير عنوان مُصدِر (issuer) أو سياسة استرداد (redemption) أو سلطة توقيع (signing). ما الذي يجب إضافته قبل أن يستطيع عضو تحديد الأصل أو الحكم على الوعد؟
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
- Current translation: إعداد توقيع متعدد (multisigning) يتطلب وزناً كافياً من الموقّعين.
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
- Current translation: يقول مشروع «المفتاح الرئيسي (master key) معطّل، إذن لا أحد يستطيع تغيير أي شيء». ما زال لحسابه مفتاح عادي (regular key) مفعّل. هل الاستنتاج مدعوم؟
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
- Current translation: المفتاح العادي (regular key) مسار توقيع (signing) منفصل.
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
- Current translation: تقول رسالة دعم إن أرصدتك الـ25 عالقة لأن حدك 100 فقط، وتطلب أن توقّع (signing) حداً غير محدود. هذا التفسير لا يلزم من المثال. افحص الفشل بالضبط والمُصدِر (issuer) والشبكة والتفويض (authorization) والتجميد (freeze) والوجهة والعملية المقصودة أولاً. رفع الحد ليس إصلاحاً عاماً لمشكلات الرموز.
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
- Current translation: محاولة إزالة سلطة التوقيع (signing) القابلة للاستخدام في الحساب. عاملها كقرار بفقدان التحكم بشكل دائم، لا كتقييم أمان.
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
- Current translation: يطلب مستكشف توقيعاً (signing) لمجرد فحص خط ثقة (trust line) عام. هل ذلك ضروري للقراءة؟
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
- Current translation: اسأل هل تحتاج المهمة إلى خط ثقة (trust line) أصلاً. قراءة سجل عام لا تحتاج توقيعاً (signing). استلام XRP الأصلي لا يحتاج خط ثقة (trust line). تجنب إضافة إعداد لمجرد أن إعلاناً يصفه بأنه إلزامي.
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
- Current translation: قبل أن يوجد طلب، اكتب القصد المخزَّن: العميل أو الجلسة، والإجراء المتوقع، والموقّع المتوقع حيث يلزم، والوجهة، والشبكة، والأصل، والمبلغ، وأي وسم توجيه، وانتهاء الصلاحية، ومرجع الطلب. عنوان محفظة يُكتب في مربع ليس برهان سيطرة.
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
- Current translation: اربط معرّف الطلب بـ O-17 في الخلفية (backend). عند الإشعار، اجلب نتيجة الحمولة (payload) وقارنها بذلك السجل. أكّد الموقّع المتوقع والشبكة. لـ SignIn تحقق من البرهان المرتبط والجلسة؛ لا توجد معاملة دفع لتدّعي أنها استُلمت.
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
- Current translation: رمز QR أعمى:
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
- Current translation: توقيع أعمى (signing):
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
- Current translation: تحقق من الصلاحيات المفوضة أيضاً
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
- Current translation: قارن بالهوية والسياسة المقصودتين. ارفض موقّعاً خاطئاً حيث يلزم التحكم في الحساب؛ ولا تعِد تسمية مالك الطلب بصمت.
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
- Current translation: هل تعطيل التوقيع بالمفتاح الرئيسي (master key) يعطّل المفتاح العادي (regular key) أيضاً؟
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
- Current translation: لدى Issuer A الخيالي توقيع بالمفتاح الرئيسي (master key) معطّل، ومفتاح عادي (regular key) معيَّن، وقائمة موقّعين (signer list) من ثلاثة أشخاص بوزن واحد لكل منهم ونصاب (quorum) اثنين. هذا مثال فحص، لا إعداداً مقترحاً.
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
- Current translation: لمسار قائمة الموقّعين (signer list)، احسب أن أي موقّعين بوزن واحد يبلغان النصاب (quorum) اثنين، بينما واحد لا يبلغه. الآن ضع دائرة على مسار المفتاح العادي (regular key): إنه مسار توقيع (signing) بديل. قائمة موقّعين من شخصين لا تفرض تحكم شخصين في كل معاملة ما دام مسار مفتاح واحد منفصل قائماً.
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
- Current translation: افحص حساباً عاماً بمستكشف للقراءة فقط: ابحث عن أعلام الحساب (flags) والمفتاح العادي (regular key) وقائمة الموقّعين (signer list) وأي سجلات تفويض تدعمها تلك الشبكة. استخدم التعريفات الرسمية المرتبطة لتفسير الأسماء. التقط الوقائع العامة فقط، مع وقت ملاحظتها. لوحة مستكشف غائبة ليست برهاناً على أن مسار سلطة غير موجود؛ استخدم بيانات سجل كاملة أو اترك البند غير محسوم.
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
- Current translation: افحص المعلومات العامة من غير توقيع (signing). تحقق من عنوان المُصدِر (issuer) كاملاً والشبكة، ولماذا يلزم خط ثقة (trust line)، والحد والأعلام (flags) المقترحين، وضوابط التفويض (authorization) والتجميد (freeze) لدى المُصدِر، وآثار الاحتياطي (reserve). البحث العام عن محفظة لا يتطلب منح خط ثقة. الحد الكبير ليس إشارة جودة.
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
- Current translation: افحص أوزان الموقّعين والنصاب (quorum) وهويات الموقّعين المأذون لهم والحساب أو الشبكة المقصودين. لا تُضعف النصاب ولا تفعّل مفتاحاً آخر كإصلاح سريع.
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
- Current translation: اذكر المُصدِر (issuer) والحسابات التشغيلية والتوقيع بالمفتاح الرئيسي (master key) المفعّل والمفتاح العادي (regular key) وقائمة الموقّعين (signer list). يستطيع المفتاح العادي الإذن بمعظم إجراءات الحساب؛ وهو ليس مجرد اعتماد API للقراءة فقط. تعطيل التوقيع بالمفتاح الرئيسي لا يثبت أن كل مسارات التوقيع (signing) الأخرى قد زالت.
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
- Current translation: المفتاح الرئيسي (master key)
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
- Current translation: المفتاح الرئيسي (master key)
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
- Current translation: التحقق من المُصدِر (issuer)، والدفاع ضد التصيّد (phishing)، ومراجعة التوقيع (signing)، ومخاطر الحفظ (custody)، وماذا تفعل عندما يحدث خطأ.
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
- Current translation: توقيع متعدد (multisigning)
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
- Current translation: يتخلى No Freeze بشكل دائم عن سلطة التجميد الفردي والعميق (freeze) وعن القدرة على إلغاء تجميد عام؛ وهو ليس وعداً عاماً بأنه لا يمكن أن يوجد أي قيد أبداً. يهدف الثقب الأسود (blackholing) إلى إزالة سلطة التوقيع (signing) القابلة للاستخدام. لا تثبت أي من التسميتين توزيعاً عادلاً أو سيولة أو تغطية أو سلامة الشيفرة البرمجية للتطبيق. افحص إعدادات الحساب الفعلية وكل مسار توقيع بدل الاعتماد على شارة.
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
- Current translation: إرشادات تفويض الصلاحيات الرسمية والتحذيرات الحالية
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
- Current translation: في مستكشف للقراءة فقط، اختر الشبكة المقصودة وابحث عن NFTokenID كاملاً. حدّد المالك الحالي والمُصدِر (issuer) والتصنيف (taxon) والأعلام (flags) وURI. فك الأعلام باستخدام مرجع المعاملة المرتبط إذا لم يشرحها المستكشف. سجّل وقت الملاحظة والسجل إن توفرا. عامل روابط البيانات الوصفية (metadata) البعيدة كمحتوى غير موثوق؛ ولا توقّع (signing) طلباً لكشف صورة.
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
- Current translation: نصاب (quorum)
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
- Current translation: مفتاح عادي (regular key)
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
- Current translation: مفتاح عادي (regular key)
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
- Current translation: المفاتيح العادية (regular key) والتوقيع المتعدد (multisigning)
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
- Current translation: مفاتيح عادية (regular key)
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
- Current translation: راجع إعدادات المفتاح العادي (regular key) وقائمة الموقّعين (signer list).
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
- Current translation: دوّر المفاتيح العادية (regular key) أو قوائم الموقّعين (signer list) عندما يناسب ذلك.
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
- Current translation: احفظ خريطة السلطة وإفصاح الضوابط بلغة مبسطة. اطلب من شخص آخر أن يشرح كيف يغيّر المفتاح العادي (regular key) مثال اثنين من ثلاثة. إذا لم يستطع، حسّن الشرح قبل الانتقال إلى درس مسار التوقيع (signing).
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
- Current translation: افصل في إفصاحك التجميد (freeze) والتفويض (authorization) والسحب (clawback) وسلطة التوقيع (signing).
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
- Current translation: قائمة موقّعين (signer list)
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
- Current translation: الحد الأدنى لمجموع أوزان الموقّعين اللازم لمعاملة متعددة التوقيع (multisigning).
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
- Current translation: يقول الموقع إن لا أحد يستطيع تغيير الأصل لأن التوقيع بالمفتاح الرئيسي (master key) معطّل. تُظهر خريطتك مفتاحاً عادياً (regular key). استبدل الادعاء ببيان دقيق للمسارات المفعّلة والقدرات المتبقية. ليس لديك دليل كافٍ لتدّعي أن لا أحد يعرف مفتاحاً، أو لتشهد على ممارسات تخزين الفريق.
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
- Current translation: هذا تمرين فحص، لا وصفة للثقب الأسود (blackholing). لا تعطّل المفاتيح ولا تضبط أعلاماً (flags) لا رجعة فيها ولا تُزِل الموقّعين أثناء اتباع هذا الدرس.
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
- Current translation: توجد قائمة اثنين من ثلاثة إلى جانب مفتاح عادي (regular key) مفعّل. هل تُفرض كل عملية عبر شخصين؟
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
- Current translation: استخدم هوية الأصل بالضبط من الدرس 1. ينتمي خط الثقة (trust line) إلى نموذج الرمز القابل للاستبدال (fungible) الكلاسيكي؛ وهذا ليس شراء NFT ولا إعداد XRP أصلي. لا يلزم توقيع (signing) لورقة العمل هذه.
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
- Current translation: حيث تدعم الشبكة تفويض الصلاحيات، يستطيع حساب أن يأذن لحساب آخر بتنفيذ إجراءات محددة. المفوَّض ليس نفسه المفتاح العادي (regular key) ولا موقّعاً على حساب المالك. أدرج سجلات التفويض القائمة وصلاحياتها بالضبط في مراجعة سلطة حقيقية؛ وقد تكون خريطة فيها ثلاثة مسارات مفاتيح فقط ناقصة. تحقق من دعم التعديل (amendment) الحالي والتحذيرات الرسمية الخاصة بالصلاحية قبل استخدام هذه الميزة. هذه الدورة لا تضبط التفويض.
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
- Current translation: اكتب إفصاحاً للمستخدم بثلاثة أعمدة: القدرة، والدليل الحاضر، وسياسة التشغيل. مثال: المفتاح العادي (regular key) حاضر / حقل حساب ملحوظ / يقول النادي إن موظفين اثنين يوافقان على استخدامه. سمِّ العمود الأخير سياسة، لا ضمان بروتوكول.
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
- Current translation: تتيح XRPL للحسابات فصل التوقيع (signing) اليومي عن المفتاح الرئيسي (master key) واشتراط عدة موقّعين.
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
- Current translation: نعم؛ قائمة الموقّعين (signer list) تلغي كل مفتاح آخر
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
- Current translation: وسم الوجهة (destination tag)
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
- Current translation: أوسمة الوجهة (destination tag) والمذكرات (memo)
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
- Current translation: للدفعات، قارن المستلم وهوية الأصل والمبلغ المسلَّم وأي وسم وجهة (destination tag) أو مرجع مطلوب بالقصد المخزَّن. الدفعات الجزئية (partial payment) تجعل المبلغ المطلوب غير آمن كإيصال: افحص delivered_amount في البيانات الوصفية (metadata). سجّل المعاملة مرة واحدة حتى لا يمنح إشعار راجع (callback) متكرر استحقاقاً ثانياً. دليل السجل المجهول أو غير المتاح يبقى معلقاً.
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
- Current translation: تعلّم الدفعات وأوسمة الوجهة (destination tag) وخطوط الثقة (trust line) وتداول الرموز وNFT والعروض (offer) والتنفيذ.
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
- Current translation: ماذا يفعل وسم الوجهة (destination tag)؟
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
- Current translation: 2. أي أصل لا يحتاج إلى خط ثقة (trust line)؟
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
- Current translation: تطلب صفحة ترويجية أن تضيف خط ثقة (trust line) غير محدود لرمز برمز مختصر (ticker) مألوف. أنت أردت فقط فحص المشروع. ماذا تفعل بعد ذلك؟
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
- Current translation: يسجّل خط الثقة (trust line) علاقة بين حسابين لعملة واحدة. «الثقة» هنا لا تعني أن المُصدِر (issuer) قد اعتُمد آمناً.
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
- Current translation: خط الثقة (trust line) علاقة على السجل بين حسابين لرمز عملة محدد واحد.
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
- Current translation: {s1} خط الثقة (trust line) يثبت أن الرمز آمن.{br2}{s3} هو ينشئ فقط علاقة الحساب اللازمة لحيازته.
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
- Current translation: يخبر خط الثقة (trust line) شبكة XRPL أن حسابك مستعد لحيازة أصل مُصدَر مرتبط بمُصدِر (issuer) محدد. يمكن أن يتضمن حداً وإعدادات أخرى. لا يستخدم $XRP خطوط الثقة (trust line) لأنه أصلي في السجل.
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
- Current translation: فعّل خط الثقة (trust line) وراقب تكوّن العلاقة.
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
- Current translation: إنشاء خط ثقة (trust line)
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
- Current translation: إنشاء خط الثقة (trust line) إذن بحيازة أصل. ليس تزكية، ولا ضماناً استثمارياً، ولا مراجعة أمنية.
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
- Current translation: رمز العملة، والمُصدِر (issuer)، والمعروض، وخطوط الثقة (trust line)، والضوابط.
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
- Current translation: خط الثقة (trust line) نشط. تستطيع هذه المحفظة الآن حيازة أصل TOKEN التابع لهذا المُصدِر (issuer)، ضمن حده وإعداداته.
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
- Current translation: إنشاء خط ثقة (trust line)
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
- Current translation: لا يوجد خط ثقة (trust line). لا تستطيع هذه المحفظة حيازة أصل TOKEN التابع لهذا المُصدِر (issuer).
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
- Current translation: إزالة خط الثقة (trust line)
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
- Current translation: هل تحتاج خط ثقة (trust line) لاستلام XRP الأصلي؟
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
- Current translation: هل يثبت خط الثقة (trust line) الأمان؟
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
- Current translation: اشرح لماذا لا يحتاج XRP إلى خط ثقة (trust line) ولماذا لا يكفي الرمز المختصر (ticker) وحده.
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
- Current translation: تحقق أولاً من الشبكة وهوية الأصل بالضبط. دعم العرض والوجود على السجل أمران مختلفان. لا تنشئ خطوط ثقة (trust line) متكررة ولا ترسل مالاً ليظهر شعار.
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
- Current translation: في هذا النموذج، ينشئ الحائز خط ثقة (trust line) ويرسل المُصدِر (issuer) عملة مُصدَرة إلى ذلك الحائز. خط الثقة وحده لا يوزّع الرموز. إعادة رصيد إلى مُصدِره تقلل المقدار القائم. حد الثقة ليس سقفاً لمعروض المشروع كله، ووعد المعروض على موقع ليس إنفاذاً على السجل. اشرح الإصدار والاسترداد (redemption) والسلطة المتبقية قبل الترويج للأصل.
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
- Current translation: يتحكم تفويض المُصدِر (authorization) في من يجوز له حيازة عملة عندما يكون ذلك مطلوباً. يقيّد التجميد الفردي (individual freeze) الإنفاق عبر خط الثقة (trust line)؛ ويضيف التجميد العميق (deep freeze) قيوداً على الاستلام، مع استثناءات للتعامل المباشر مع المُصدِر (issuer). وللتجميد العام (global freeze) آثار أوسع. ضوابط الرموز هذه لا تجمّد XRP الأصلي. والسحب (clawback) قدرة منفصلة ينبغي الإفصاح عنها بشكل منفصل؛ وهو ليس اسماً آخر للتجميد (freeze).
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
- Current translation: افهم XRP Ledger والمحافظ والحسابات والمُصدِرين (issuer) وخطوط الثقة (trust line) والاحتياطيات (reserve) والرموز والمعاملات وDEX وAMM وNFT وكيف تتصل كلها.
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
- Current translation: يسجّل خط الثقة (trust line) علاقة بين حسابين لعملة واحدة. «الثقة» هنا لا تعني أن المُصدِر (issuer) قد اعتُمد آمناً.
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
- Current translation: خطوط الثقة (trust line) | مركز المطوّرين | XRPL LAYMAN
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
- Current translation: الدفعات والأوسمة وخطوط الثقة (trust line) والعروض (offer) وAMM وNFT وكيف تُنفَّذ معاملات XRPL.
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
- Current translation: لا يوجد خط ثقة (trust line).
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
- Current translation: لا يلزم خط ثقة (trust line)
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
- Current translation: خطوط ثقة مملوكة (trust line)
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
- Current translation: هل هي Payment، أم خط ثقة (trust line)، أم عرض (offer)، أم عرض NFT، أم إعداد حساب؟
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
- Current translation: خط ثقة (trust line)
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
- Current translation: خطوط الثقة (trust line)
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
- Current translation: خطوط الثقة (trust line):
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
- Current translation: {s1}خطوط الثقة (trust line)
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
- Current translation: خط الثقة (trust line) مطلوب عادة
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
- Current translation: عارض خط الثقة (trust line)
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
- Current translation: خط ثقة (trust line)
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
- Current translation: خطوط الثقة (trust line)
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
- Current translation: ينشئ TrustSet علاقة خط ثقة (trust line) أو يعدّلها. يحدّد LimitAmount العملة والمُصدِر (issuer) المقابل والحد. لا يستخدم XRP الأصلي خطوط الثقة. يغطي هذا الدرس رموز خط الثقة، لا تفويض MPT.
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
- Current translation: ما لا يعنيه خط الثقة (trust line)
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
- Current translation: ما خط الثقة (trust line)؟
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
- Current translation: XRP أصلي؛ وتصف خطوط الثقة (trust line) العملات المُصدَرة.
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
- Current translation: يحتاج حسابك عادة إلى خط ثقة (trust line) نحو المُصدِر (issuer) والعملة بالضبط.
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
- Current translation: احتياطي أساسي (reserve) قدره 1 $XRP
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
- Current translation: يستخدم البيع عادة عرض NFT (offer) وقبوله. إنشاء العرض ليس دفعة مكتملة ولا تسليماً. قبل القبول، راجع NFT المحدد وأصل الدفع والمبلغ وقيد الوجهة وانتهاء الصلاحية ورسم نقل المُصدِر (issuer). تستخدم رسوم نقل NFT وحدات 0.001%؛ فمثلاً 1,000 تمثل 1%، لا 1,000 XRP. الانطباق يعتمد على النقل. أكّد النتيجة المعتمدة في السجل (validated) والملكية بعد ذلك.
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
- Current translation: رسم AMM %
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
- Current translation: يصبح الحساب نشطاً على السجل عندما يتلقى ما يكفي من $XRP للوفاء بالاحتياطي (reserve) الحالي.
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
- Current translation: لا يساوي NFT دائماً عنصر احتياطي مالك واحد. تخزّن XRPL رموز NFT في عناصر NFTokenPage، ويمكن لكل صفحة أن تحمل عدة NFT. لا تعد كل NFT عنصراً احتياطياً مستقلاً.
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
- Current translation: NFT على XRPL رمز فريد على السجل له معرّفه وأعلامه (flags) ومُصدِره (issuer) وتصنيفه (taxon) وتسلسله (sequence) ورسم نقل اختياري.
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
- Current translation: قواعد الاحتياطي (reserve) الحالية
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
- Current translation: احتياطي أساسي 1 $XRP + {objects} عناصر مملوكة × 0.2 $XRP.
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
- Current translation: احتياطي أساسي 1 $XRP + {objects} عنصر مملوك × 0.2 $XRP.
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
- Current translation: {s1} ميّز الرصيد والحد والضوابط والاحتياطيات (reserve).
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
- Current translation: قدّر الاحتياطي (reserve) لحساب بسيط. الملكية الفعلية وسلوك الاحتياطي قد يختلفان حسب نوع العنصر.
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
- Current translation: {s1} كل $XRP معروض قابل للإنفاق.{br2}{s3} قد يُلزم بعضه لاحتياطي الحساب واحتياطي المالك (reserve).
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
- Current translation: الرسم
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
- Current translation: الأعلام (flags)، وURI، والتصنيف (taxon)، والعروض (offer)، ورسوم النقل، ودورة الحياة.
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
- Current translation: © 2026 House of Cauliman. جميع الحقوق محفوظة.
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
- Current translation: افحص بيعاً مقترحاً خيالياً: NFT Record N، السعر 20 XRP، مستلم مقيّد Member C، وانتهاء مذكور. حقل رسم نقل NFT وقيمته 1,000 يمثل 1%. في بيع منطبق بقيمة 20 XRP يساوي ذلك 0.2 XRP؛ تحقق من نمط البيع الفعلي ومحاسبة التسوية بدل افتراض أن كل سعر معروض هو صافي البائع.
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
- Current translation: هل الرسم غير طبيعي؟
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
- Current translation: يمكن لعناصر السجل أن تؤثر في احتياطي XRP (reserve) الذي يحتاجه الحساب. يمكن أن تتغير قواعد الاحتياطي ومقاديره، وتوجد استثناءات لخط الثقة (trust line): تحقق من قواعد الشبكة الحالية بدل افتراض أن كل خط يكلف المقدار نفسه. ضبط الحد على صفر لا يمحو رصيداً غير صفري ولا يضمن الإزالة الفورية. يجب أن يستوفي الخط القابل للإزالة شروط الحالة الافتراضية في السجل.
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
- Current translation: تستخدم Mainnet حالياً {s1} إضافة إلى {s2}. يمكن أن تتغير هذه القيم عبر تصويت المدققين (validators) على الرسم، لذلك ينبغي للبرنامج أن يستعلم الشبكة بدل تثبيتها في الشيفرة البرمجية إلى الأبد.
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
- Current translation: يريد نادي الحي الخيالي أن يحجز الأعضاء مقاعد الورشة بالأرصدة. احمل هذا المشروع نفسه عبر الدورة. تسميات مثل Issuer A تسميات ورقية، وليست عناوين قابلة للاستخدام. المقصود إيجاد القرارات الناقصة قبل أن ينشئ أي شخص أصلاً.
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
- Current translation: خطّط للاحتياطيات (reserve) والإزالة
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
- Current translation: خطّط لفحص الاحتياطي (reserve) بشكل منفصل عن كمية الرمز. احصل على احتياطي الشبكة الأساسي والتزايدي الحالي وعناصر المالك ذات الصلة بالحساب عند تنفيذ أداة حقيقية. لا تضرب كل رصيد رمز ظاهر برسم XRP ثابت واحد: لقواعد خط الثقة (trust line) والعناصر الأخرى استثناءات.
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
- Current translation: {s1} اقرأ الرصيد والحد وضوابط المُصدِر (issuer) وآثار الاحتياطي (reserve) من غير الخلط بين تغيير إعداد واستلام مال.
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
- Current translation: حاسبة الاحتياطي (reserve)
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
- Current translation: احتياطي (reserve)
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
- Current translation: احتياطيات (reserve)
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
- Current translation: افصل إيراد المنتج عن رسوم شبكة XRPL.
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
- Current translation: فُحصت المراجع التقنية في 3 أكتوبر 2026. يمكن أن تتغير تعديلات الشبكة (amendment) ودعم المحفظة وقواعد الاحتياطي (reserve). تحقق من الوثائق الحالية قبل تنفيذ معاملات حقيقية.
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
- Current translation: يقترح النادي الآن NFT تذكارياً اختيارياً. إنه منفصل عن الأرصدة. استخدم هذا السجل الخيالي: الشبكة Testnet؛ هوية NFT هي Record N؛ المُصدِر Issuer A؛ المالك Member B؛ قابل للنقل نعم؛ قابل للحرق (burn) نعم؛ قابل للتغيير نعم؛ حقل رسم النقل 1,000؛ URI صفحة بيانات وصفية (metadata) عبر HTTPS. هذه حقول وصفية، وليست JSON معاملة.
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
- Current translation: {s1} رسم الشبكة يذهب إلى المدققين (validators).{br2}{s3} تُدمَّر تكاليف معاملات XRPL.
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
- Current translation: الرصيد الكلي ليس نفسه XRP المتاح فوق حاجات الاحتياطي (reserve) والرسم. تحقق من النتيجة بالضبط وقواعد الاحتياطي الحالية قبل تغيير إعدادات غير ذات صلة.
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
- Current translation: رسم النقل
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
- Current translation: حجم الصفقة يساوي {pct}% من جانب المجمع المختار قبل رسم {fee}%.
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
- Current translation: يُستخدم للاحتياطيات (reserve) وتكاليف المعاملات
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
- Current translation: لماذا يبقى بعض $XRP محجوزاً (reserve)
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
- Current translation: اكتب عقد إصدار من صفحة واحدة: نتيجة المستخدم، والنطاق، والهويات، والضوابط، والرسوم، والقيود.
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
- Current translation: اكتب وعد استرداد (redemption): رصيد واحد يحجز مقعداً مؤهلاً واحداً، وفق شروط الحجز المكتوبة. قرر الإلغاء وانتهاء الصلاحية والمبالغ المعادة والدعم وما يحدث إذا أُغلق النادي. بروتوكول الرمز لا يكتب تلك الشروط التجارية ولا ينفذها لك.
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
- Current translation: اكتب المشكلة والمستخدم المقصود وأصغر نتيجة مفيدة. انشر هويات الأصول بالضبط وأدوار الحسابات وسلطة المُصدِر (issuer) المتبقية ورسوم المنتج وتكاليف الشبكة. ميّز النموذج الأولي وتدريب شبكة الاختبار وميزة Mainnet العاملة. تجنب الوعد بربح أو توفر دائم أو ضمان أمان لا تستطيع إثباته.
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
- Current translation: XRP يجب أن يبقى متاحاً لدعم حساب وعناصر السجل ذات الصلة؛ وهو مختلف عن رسم المعاملة.
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
- Current translation: AMM والانزلاق (slippage)
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
- Current translation: يحتفظ AMM بأصلين في مجمع ويسعّر المبادلات من أرصدة المجمع.
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
- Current translation: DEX والعروض (offer) وAMM
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
- Current translation: السعر والسيولة والانزلاق (slippage) وضوابط المُصدِر (issuer) والتركّز والدورات والمخاطر التي يتجاهلها الناس حتى تؤلم.
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
- Current translation: عرض بسيط للانزلاق (slippage)
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
- Current translation: الانزلاق (slippage) وعمق المجمع
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
- Current translation: انزلاق (slippage)
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
- Current translation: يستخدم DEX في XRPL العروض (offer) لمبادلة أصل بآخر.
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
- Current translation: يقول إدراج «مقتنى دائم». NFT قابل للتغيير، وصورته على خادم ويب عادي، ويعرض البائع لقطة شاشة بدل NFTokenID. أي ادعاءات تبقى غير مثبتة؟
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
- Current translation: حرق (burn)
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
- Current translation: تحقق من صلاحيات الحرق (burn) والنقل وتغيير URI؛ واكتب عدم اليقين بدل افتراض القيم الافتراضية.
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
- Current translation: اختر مثالاً يمكن عرضه علناً وحدد NFTokenID والمُصدِر (issuer) والمالك والتصنيف (taxon) من غير وصل محفظة.
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
- Current translation: اختر نموذج الأصل على الورق: الأرصدة القابلة للتبادل توحي برمز قابل للاستبدال (fungible)؛ ومقتنى عضوية واحد يمكن تمييزه يوحي بـ NFT. سجّل رمز خط الثقة (trust line) الكلاسيكي لهذا التمرين. MPTs معيار آخر، وليست اسماً مختلفاً للإعداد نفسه.
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
- Current translation: السك (mint) والحرق (burn) والعرض (offer)
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
- Current translation: السك (mint) ينشئ NFT؛ والحرق (burn) يدمّر رمزه على السجل؛ والعرض (offer) يقترح مبادلة ويمكن أن يبقى غير مقبول.
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
- Current translation: يضبط NFTokenMint أعلاماً (flags) مهمة. يسمح علم Transferable بالنقل بين الحائزين العاديين؛ ومن دونه تخضع التحويلات المرتبطة بالمُصدِر (issuer) لقيود خاصة. ويمنح علم Burnable المُصدِر أو الطرف المأذون له سلطة الحرق (burn)؛ كما يستطيع المالكون حرق رموز NFT التي يملكونها. ويمكن للمُصدِر أو الجهة المخوّلة بالسك تحديث URI الخاص برمز NFT قابل للتغيير عبر NFTokenModify. لا تفترض أن مؤشر البيانات الوصفية (metadata) لكل NFT ثابت.
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
- Current translation: سلطة NFTokenModify منفصلة عن الملكية العادية.
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
- Current translation: تتحرك رموز NFT عبر معاملات السك (mint) والعرض (offer) والقبول والنقل والحرق (burn).
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
- Current translation: الملكية وحدها ليست إذن تحرير. لـ NFT القابل للتغيير، يقتصر NFTokenModify على المُصدِر (issuer) أو الساك المأذون؛ ويهم أيضاً تعديل الشبكة (amendment) ودعم المحفظة.
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
- Current translation: سجّل الشبكة وNFTokenID والمُصدِر (issuer) والمالك الحالي والتصنيف (taxon). يجمع التصنيف رموز NFT المرتبطة من مُصدِر؛ وهو ليس برهان ندرة ولا وعداً بأن المجموعة اكتملت. الملكية والسك (mint) دوران مختلفان.
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
- Current translation: افصل قيد الرصيد عن السحب (clawback) أو حرق NFT (burn). اطلب معيار الأصل والضابط المستخدمين بالضبط.
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
- Current translation: إعدادات يمكن أن تتحكم في ما إذا كان NFT قابلاً للنقل وما إذا كان المُصدِر (issuer) يستطيع حرقه (burn).
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
- Current translation: يصف النادي هذا المقتنى بأنه دائم، لكن المثال يسمح صراحة بتغييرات URI وبحرق (burn) يأذن به المُصدِر (issuer). أعد كتابة الادعاء هكذا: مقتنى قابل للنقل مع ضوابط مُصدِر مفصح عنها ومحتوى مستضاف خارجياً. اذكر خطة الحفظ والترخيص بشكل منفصل. الوعد الأوضح أنفع من شارة الدوام.
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
- Current translation: لقطة الشاشة لا تحدّد NFT. احصل على شبكته وNFTokenID، وافحص المُصدِر (issuer) والمالك، ثم افحص الأعلام (flags) وURI. البيانات الوصفية (metadata) القابلة للتغيير والاستضافة الخارجية تحتاجان إفصاحاً وخطة حفظ. ملكية السجل لا تنقل حقوق النشر تلقائياً ولا تثبت بقاء الصورة بشكل دائم.
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
- Current translation: يرى عضو أصلين بشعار النادي نفسه. أحدهما من Issuer A والآخر من Issuer C. القرار الصحيح هو مقارنة الهويات الكاملة بمواصفة النادي، لا اختيار الصورة الأجمل. وحتى الأصل المطابق ما زال يحتاج مراجعة الاسترداد (redemption) والسلطة بشكل منفصل.
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
- Current translation: أضف عمود تحكم. دوّن ما إذا كان تفويض المُصدِر (authorization) مطلوباً وممنوحاً، وما إذا كانت قيود التجميد (freeze) موجودة، وما إعدادات التمرير (rippling) ذات الصلة. «غير معروف» نتيجة صالحة: تعني أنك تحتاج دليلاً، لا افتراضاً مخمَّناً.
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
- Current translation: قد يشترط المُصدِر (issuer) تفويضاً (authorization) قبل أن يستطيع الحائز حيازة عملته. يمكن لإعدادات التجميد (freeze) أن تقيّد الأصل. يمكن للتمرير (rippling) أن ينقل قيمة عبر علاقات خط ثقة (trust line) متوافقة كجزء من الدفعات. تؤثر إعدادات No Ripple في تلك المسارات؛ وهي لا تجعل الرمز آمناً ولا تزيل مخاطر المُصدِر. راجع إعدادات الحساب والخط معاً قبل تغيير الافتراضات.
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
- Current translation: حالة الثقب الأسود (blackhole)
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
- Current translation: أحضر ملاحظات هوية المشروع والسلطة. لا تحتاج محفظة لهذا الدرس. إذا نفذت تكاملاً لاحقاً، استخدم بيئة اختبار منفصلة ووثائق Xaman الرسمية الحالية.
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
- Current translation: هل يستطيع مُصدِر (issuer) تجميد (freeze) XRP الأصلي باستخدام ضوابط تجميد رموزه؟
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
- Current translation: الإنشاء لا يخلق مشترين ولا سعراً سوقياً ولا أموال استرداد (redemption). افحص عمق السوق الفعلي وشروط الاسترداد المنشورة؛ ولا تصف أبداً سعراً غير مدعوم بأنه قيمة مضمونة.
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
- Current translation: هل يعني تجميد (freeze) رمز مُصدَر أن المُصدِر (issuer) يستطيع تجميد XRP الأصلي لدى الحائز؟
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
- Current translation: اشرح إجابتك من غير النظر إلى المثال المحلول، ثم قارن. إذا خمّنت، عُد إلى القسم المناسب. مربعات التحديد وتغذية الاختبار تبقى في هذه الصفحة فقط؛ واحتفظ بملاحظات مشروعك بنفسك.
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
- Current translation: تابع نادياً خيالياً في الحي من أرصدة الورشة إلى مقتنى ومسار حجز. يحتوي كل درس على تعريفات وورقة عمل ورقية موجهة وقرار محلول وأخطاء شائعة وأسئلة مع شروح. اقرأ الدرس، وحاول الورقة قبل التحقق من الجواب، واحتفظ بصفحة الملاحظات الناتجة. لا يوجد حساب ولا شهادة درجات ولا ملف تعلم محفوظ.
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
- Current translation: ضوابط التجميد (freeze)
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
- Current translation: يُوصَف التجميد (freeze) بأنه إتلاف للرموز
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
- Current translation: أنواع التجميد (freeze) وNo Freeze
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
- Current translation: التجميد (freeze) مقابل السحب (clawback)
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
- Current translation: التجميد (freeze)
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
- Current translation: في عرض حساب بمستكشف للقراءة فقط، افتح قسم الأرصدة المُصدَرة أو خط الثقة (trust line). حدّد العملة بدقة والمُصدِر (issuer) المقابل، ثم قارن الرصيد والحد وأي حقول تجميد (freeze) أو تفويض (authorization) أو تمرير (rippling) ظاهرة. حدّد المنظور المعروض. إذا غاب حقل عن الواجهة، اكتب «غير ظاهر» بدل افتراض أنه معطّل. يمكن أن تبقى ورقة التعلم خيالية إذا لم يتوفر سجل مناسب.
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
- Current translation: التغذية الراجعة التفاعلية تحتاج JavaScript. يبقى كل محتوى الدرس والجواب المحلول أعلاه متاحاً.
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
- Current translation: اذكر الدليل الذي يحتاجه المراجع: هوية الأصل بالضبط؛ ومن يستطيع الإصدار أو تغيير الضوابط؛ وسجلات التوزيع؛ وشروط الاسترداد (redemption)؛ وأي آلية سقف مدعاة؛ وما يبقى مجهولاً. استخدم الدرس 4 لإكمال قسم السلطة بدل افتراض أن الحساب لا يستطيع التغيير.
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
- Current translation: اذكر ضوابط الرمز بشكل منفصل عن المفاتيح: التفويض (authorization) المطلوب، والتجميد الفردي والعميق والعام (freeze)، وNo Freeze، وقدرة السحب (clawback). اشرح الأثر على الحائزين والدليل الذي فحصته. لا تحوّل قيداً على علاقة رمز واحدة إلى قيد على XRP أو على كل أصل.
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
- Current translation: مسارات Xaman | مركز المطوّرين | XRPL LAYMAN
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
- Current translation: تصف صفحة NEB العامة نظام تداول مستقبلي. معاينتها ليست دليلاً على تغذيات حية أو تنفيذ.
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
- Current translation: لا تغيّر أبداً أعلام التمرير (rippling) أو التجميد (freeze) أو التفويض (authorization) لمجرد إزالة تحذير لا تفهمه. TrustSet الناجح تغيير إعدادات، لا شراء ولا تزكية أمان.
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
- Current translation: التصيّد (phishing) ومسارات الاتصال المزيفة
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
- Current translation: استرداد (redemption)
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
- Current translation: تدرّب على معاملة غير مؤكدة: توجد تجزئة لكن البحث لا يجدها. أبقِ القصد الأصلي ودليل انتهاء الصلاحية المحدود. اسأل هل لدى الخادم المستعلَم التاريخ المطلوب وهل تجاوز حد السجل المعني قبل أن تستنتج عدم الإدراج. لا تصدر دفعة جديدة لمجرد أن بحثاً واحداً كان فارغاً.
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
- Current translation: احفظ مواصفة أصل من صفحة واحدة فيها الغرض والمعيار المختار والشبكة والهوية وشروط الاسترداد (redemption) وحساب المعروض وأسئلة السلطة المفتوحة. في الدرس 2 ستضيف مقتنى منفصلاً؛ لا تعامل الرصيد والمقتنى كأصل واحد.
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
- Current translation: يستطيع المحتالون خداعك لتأذن بالمعاملة بنفسك.
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
- Current translation: فكّر في XRPL كقاعدة البيانات المشتركة تحت التطبيقات. Xaman والمنصات والمستكشفون والألعاب والأسواق واجهات. السجل هو القيد الذي تقرأه هذه الواجهات وتكتب إليه.
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
- Current translation: يتبع هذا الدرس نموذج رمز خط الثقة (trust line) الكلاسيكي. لدى XRPL أيضاً رموز متعددة الأغراض (MPTs)، بمعرّفات وقدرات مختلفة. اختر المعيار عمداً وتحقق من الشبكة المقصودة ودعم المحفظة قبل اتباع درس. هذه الدروس لا تنشئ أياً من نوعي الرمز.
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
- Current translation: تجميد السحب (withdrawal freeze)
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
- Current translation: اكتب خطة مغادرة: حل الرصيد المحتفَظ به عبر قرار استرداد (redemption) أو نقل متعمد، ثم افحص إعدادات الخط غير الافتراضية على الجانبين. ضبط الحد على صفر وحده ليس برهاناً على أن الخط اختفى. قد يبقى رصيد أو حالة أخرى تبقيه موجوداً.
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
- Current translation: {s1} اكتب الغرض وهوية الأصل بالضبط ووعد الاسترداد (redemption) وأسئلة المعروض.
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
- Current translation: حدود استخدام بيانات اعتماد Xaman
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
- Current translation: مسارات Xaman
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
- Current translation: مسارات Xaman:
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
- Current translation: {s1}مسارات Xaman
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
- Current translation: قائمة فحص تنفيذ Xaman
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
- Current translation: فحوص تنفيذ Xaman
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
- Current translation: مفاهيم حمولة Xaman (payload)
- Approve:
- Correction:
- Reviewer:
- Date:
