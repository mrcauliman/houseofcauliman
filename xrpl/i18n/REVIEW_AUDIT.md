# Pre-merge translation audit

Scope: the 230 security and finance strings in `NEEDS_REVIEW.md`, across pt-BR, es, fr, de, ja, ko, zh-CN, hi, and ar. English is the source and is not a translation class.

This file does not certify the translations. It records a meaning check against the English and a fix for the two strings that changed the English claim.

## Classes

- **(a) Meaning problem.** The translation changes the English claim. Two were found and corrected in the catalogs. None remain.
- **(b) Intentionally English.** The whole string is identical to English. These are short labels, field names, or flag names (`Seed`, `Trust line`, `Freeze`, `DEX + AMM`). A flag name such as `No Freeze` that sits inside a translated sentence stays class (c).
- **(c) Translated, still needs a native speaker.** The English claim is still visible: negation kept, placeholders kept, `$XRP` and `0.2` kept, and the false quiz options still state the false claim. A native speaker still has to approve the wording. Parenthetical English terms such as `(trust line)` or `(seed)` are glossary anchors, not a separate class.

## Counts

| Language | (a) remaining | (b) English labels | (c) needs native approval | Total |
| --- | ---: | ---: | ---: | ---: |
| pt-BR | 0 | 15 | 215 | 230 |
| es | 0 | 1 | 229 | 230 |
| fr | 0 | 18 | 212 | 230 |
| de | 0 | 15 | 215 | 230 |
| ja | 0 | 1 | 229 | 230 |
| ko | 0 | 1 | 229 | 230 |
| zh-CN | 0 | 1 | 229 | 230 |
| hi | 0 | 1 | 229 | 230 |
| ar | 0 | 1 | 229 | 230 |

## (a) Fixed

A later pass, recorded in `APPROVAL_CHECKLIST.md`, corrected four more meaning errors and one matching Arabic sentence outside this 230-string list. The Chinese heading `what-a-trustline-doesn-t-mean.c56a66d8` was corrected again after that: “并不表示的含义” was not a grammatical noun phrase, and the catalog now says “信任线（trust line）所不表示的含义”. After those corrections, class (a) remaining is still 0. Those strings stay in class (c) until a native speaker signs the checklist. None of this is native-speaker approval.

### pt-BR `this-lesson-follows-the-classic-trus.fc252c0f`

English: “Choose the standard deliberately and check the intended network and wallet support before following a tutorial.”

Before: `Escolha o padrão de propósito e confira a rede pretendida e o suporte da carteira antes de seguir um tutorial.`

That reads as a “purpose standard,” which the English does not name.

After: `Escolha o padrão deliberadamente e confira a rede pretendida e o suporte da carteira antes de seguir um tutorial.`

The rest of the sentence is unchanged: classic trust-line tokens and MPTs stay different standards, and the lessons still do not create either token. After the fix this string is class (c).

### hi `mainnet-currently-uses-a-plus-these.85124d92`

English: “Mainnet currently uses a {s1} plus {s2}.” The slots are the 1 $XRP base reserve and 0.2 $XRP for each qualifying owned ledger object.

Before: `Mainnet अभी {s1} तथा {s2} का उपयोग करता है।` (`तथा` is “and,” not addition.)

After: `Mainnet अभी {s1} प्लस {s2} का उपयोग करता है।`

The numbers, `$XRP`, and the following sentence about validator fee voting are unchanged. After the fix this string is class (c).

Checked and not class (a):

- Japanese, Korean, and Chinese render “3 October 2026” as year-month-day. The date is the same.
- Japanese and Korean mention 100 before 25 in the “25 credits / limit 100” support example. Both numbers remain.
- German “Sie werden vernichtet” for “It’s destroyed” matches the plural question “Wohin gehen die üblichen XRPL-Transaktionskosten?”
- False quiz lines still say the false thing: the fee goes to validators, a trust line proves safety, any signature proves payment, mutable means any holder may edit. The corrections still say the cost is destroyed, a trust line only creates the holding relationship, and the owner cannot change the URI.
- “Can a seed be reset?”, “Does changing an app password fix a leaked seed?”, and “Your seed isn’t a password” stay questions or denials. None says a seed can be reset.
- Freeze is still a restriction, not destruction. No Freeze still gives up individual and deep-freeze authority. Blackholing is still not proof a project is safe. A zero limit still does not erase a nonzero balance. MPTs stay a different standard from trust-line tokens. Native XRP is still outside issuer freeze.

## (b) Intentionally English

### pt-BR (15)

- `burn.b96d6af1` — Burn
- `dex-amm.22b33553` — DEX + AMM
- `freeze-versus-clawback.0c521a9b` — Freeze versus clawback
- `freeze.5a6b2d30` — Freeze
- `master-key.68952d53` — Master key
- `multisigning.632671a2` — Multisigning
- `regular-key.77459c09` — Regular key
- `seed.32fe9f5b` — Seed
- `slippage.98bc091b` — Slippage
- `trust-line.ecacf5fe` — Trust line
- `trust-lines.145a705b` — Trust lines
- `trust-lines.d4c063e8` — Trust lines:
- `trust-lines.fdb24683` — {s1}Trust lines
- `trustline.9ba9cbe8` — Trustline
- `trustlines.57b2be31` — Trustlines

### es (1)

- `dex-amm.22b33553` — DEX + AMM

### fr (18)

- `burn.b96d6af1` — Burn
- `dex-amm.22b33553` — DEX + AMM
- `freeze.5a6b2d30` — Freeze
- `master-key.15d812b8` — Master Key
- `master-key.68952d53` — Master key
- `multisigning.632671a2` — Multisigning
- `quorum.fdaafe2d` — Quorum
- `regular-key.26e205f4` — Regular Key
- `regular-key.77459c09` — Regular key
- `regular-keys.33fe0531` — Regular Keys
- `seed.32fe9f5b` — Seed
- `signer-list.166a4390` — Signer List
- `slippage.98bc091b` — Slippage
- `trust-line.ecacf5fe` — Trust line
- `trust-lines.145a705b` — Trust lines
- `trust-lines.fdb24683` — {s1}Trust lines
- `trustline.9ba9cbe8` — Trustline
- `trustlines.57b2be31` — Trustlines

### de (15)

- `burn.b96d6af1` — Burn
- `destination-tag.d07f561a` — Destination Tag
- `dex-amm.22b33553` — DEX + AMM
- `freeze.5a6b2d30` — Freeze
- `master-key.15d812b8` — Master Key
- `multisigning.632671a2` — Multisigning
- `quorum.fdaafe2d` — Quorum
- `regular-key.26e205f4` — Regular Key
- `regular-keys.33fe0531` — Regular Keys
- `reserve.187579e3` — Reserve
- `seed.32fe9f5b` — Seed
- `signer-list.166a4390` — Signer List
- `slippage.98bc091b` — Slippage
- `trustline.9ba9cbe8` — Trustline
- `trustlines.57b2be31` — Trustlines

### ja (1)

- `dex-amm.22b33553` — DEX + AMM

### ko (1)

- `dex-amm.22b33553` — DEX + AMM

### zh-CN (1)

- `dex-amm.22b33553` — DEX + AMM

### hi (1)

- `dex-amm.22b33553` — DEX + AMM

### ar (1)

- `dex-amm.22b33553` — DEX + AMM

## (c) Needs native-speaker approval

Every review key that is not listed under (b) for that language is class (c) for that language. The English text is below. The current translation is in `NEEDS_REVIEW.md`.

- `1-xrp-base-reserve.824f6b20` — class (c) in all nine languages
  - en: 1 $XRP base reserve
- `2-which-asset-doesn-t-need-a-trustli.9a866002` — class (c) in all nine languages
  - en: 2. Which asset doesn’t need a trustline?
- `a-callback-is-a-reason-for-the-backe.50625123` — class (c) in all nine languages
  - en: A callback is a reason for the backend to fetch the payload result, not proof to trust blindly. Check the resolved/signed state, expected account and intended network. For a ledger transaction, look up its transaction hash and verify validation, result and the exact intended operation. A signed request can still fail or remain unresolved on ledger.
- `a-fictional-club-proposes-1-000-club.bd5125de` — class (c) in all nine languages
  - en: A fictional club proposes 1,000 CLUB credits. Its launch sheet lists a logo and ticker, but no issuer address, redemption policy or signing authority. What must be added before a member could identify the asset or judge the promise?
- `a-human-manageable-secret-that-can-d.8636fdfc` — class (c) in all nine languages
  - en: A human-manageable secret that can derive the keys. It’s not a password you can reset.
- `a-listing-says-permanent-collectible.fc19f9eb` — class (c) in all nine languages
  - en: A listing says “permanent collectible.” The NFT is mutable, its image sits on an ordinary web server, and the seller shows a screenshot rather than the NFTokenID. Which claims remain unproven?
- `a-member-sees-two-assets-with-the-sa.a08c1393` — class (c) in all nine languages
  - en: A member sees two assets with the same club logo. One is from Issuer A and one from Issuer C. The correct decision is to compare complete identities against the club specification, not select the nicer image. Even the matching asset still needs the separate redemption and authority review.
- `a-multisigning-setup-requiring-enoug.5a733927` — class (c) in all nine languages
  - en: A multisigning setup requiring enough signer weight.
- `a-project-says-master-key-disabled-t.dc0aa5ea` — class (c) in all nine languages
  - en: A project says “master key disabled, therefore nobody can change anything.” Its account still has an enabled regular key. Is the conclusion supported?
- `a-promotional-page-asks-you-to-add-a.9a219adb` — class (c) in all nine languages
  - en: A promotional page asks you to add an unlimited trust line to a token with a familiar ticker. You only wanted to inspect the project. What should you do next?
- `a-regular-key-is-a-separate-signing.81ac6af9` — class (c) in all nine languages
  - en: A regular key is a separate signing route.
- `a-sale-normally-uses-an-nft-offer-an.ae15a8df` — class (c) in all nine languages
  - en: A sale normally uses an NFT offer and its acceptance. Creating an offer is not completed payment or delivery. Before acceptance, review the exact NFT, payment asset, amount, destination restriction, expiration and issuer transfer fee. NFT transfer fees use units of 0.001%; for example 1,000 represents 1%, not 1,000 XRP. Applicability depends on the transfer. Confirm the validated outcome and ownership afterward.
- `a-signer-list-assigns-weights-and-a.88fc3ebe` — class (c) in all nine languages
  - en: A signer list assigns weights and a quorum. For example, three independent signers of weight one with quorum two requires enough valid signatures to reach two. This only protects the intended signing route: review any enabled master or regular key as well. Test recovery on a non-production network before moving authority.
- `a-support-message-says-your-25-credi.f5084773` — class (c) in all nine languages
  - en: A support message says your 25 credits are stuck because your limit is only 100 and asks you to sign an unlimited limit. That explanation does not follow from the sample. Inspect the exact failure, issuer/network, authorization, freezes, destination and intended operation first. Increasing a limit is not a general repair for token problems.
- `a-trust-line-records-a-relationship.41fdf4ce` — class (c) in all nine languages
  - en: A trust line records a relationship between accounts for one currency. “Trust” here does not mean the issuer has been approved as safe.
- `a-trustline-is-an-on-ledger-relation.5f24b5a6` — class (c) in all nine languages
  - en: A trustline is an on-ledger relationship between two accounts for one specific currency code.
- `a-trustline-proves-a-token-is-safe-i.70f360f9` — class (c) in all nine languages
  - en: {s1} A trustline proves a token is safe.{br2}{s3} It only creates the account relationship needed to hold it.
- `a-trustline-tells-xrpl-that-your-acc.0ac7c82b` — class (c) in all nine languages
  - en: A trustline tells XRPL that your account is willing to hold an issued asset connected to a specific issuer. It can include a limit and other settings. $XRP doesn’t use trustlines because it’s native to the ledger.
- `a-xaman-payload-is-a-signing-request.d7a646f5` — class (c) in all nine languages
  - en: A Xaman payload is a signing request. Your product should first explain the action, network, signing account, exact asset, recipient and amount or permissions. A sign-in identifies an account; it is not a payment. Never ask users to paste a seed, secret numbers or a private key into your page.
- `activate-the-trustline-and-watch-the.bfd64ab7` — class (c) in all nine languages
  - en: Activate the trustline and watch the relationship form.
- `add-a-control-column-note-whether-is.b0a44ba6` — class (c) in all nine languages
  - en: Add a control column. Note whether issuer authorization is required and granted, whether freeze restrictions exist, and what the relevant ripple settings are. Unknown is a valid result: it means you need evidence, not a guessed default.
- `amm-fee.8a9bd5c7` — class (c) in all nine languages
  - en: AMM fee %
- `amms-and-slippage.da4418e3` — class (c) in all nine languages
  - en: AMMs and slippage
- `an-account-becomes-active-on-ledger.93d4ca9b` — class (c) in all nine languages
  - en: An account becomes active on-ledger when it receives enough $XRP to meet the current reserve.
- `an-amm-holds-two-assets-in-a-pool-an.45dadf03` — class (c) in all nine languages
  - en: An AMM holds two assets in a pool and prices swaps from pool balances.
- `an-attempt-to-remove-usable-account.dbb3b496` — class (c) in all nine languages
  - en: An attempt to remove usable account signing authority. Treat it as a permanent loss-of-control decision, not a safety rating.
- `an-explorer-asks-for-a-signature-jus.626777f6` — class (c) in all nine languages
  - en: An explorer asks for a signature just to inspect a public trust line. Is that necessary for reading?
- `an-nft-doesn-t-always-equal-one-owne.12e690f6` — class (c) in all nine languages
  - en: An NFT doesn’t always equal one owner-reserve item. XRPL stores NFTs in NFTokenPage objects, and each page can hold multiple NFTs. Don’t count individual NFTs as individual reserve objects.
- `an-xrpl-nft-is-a-unique-on-ledger-to.e0bd5a2f` — class (c) in all nine languages
  - en: An XRPL NFT is a unique on-ledger token with its own identifier, flags, issuer, taxon, sequence, and optional transfer fee.
- `are-read-only-learning-material-with.acd12af2` — class (c) in all nine languages
  - en: {s1} are read-only learning material with fictional examples and local quiz feedback. {s2} is a separate ledger for later implementation rehearsal; its test assets do not pay Mainnet bills. {s3} carries real assets and consequences. Devnet can include experimental changes; success there does not establish Mainnet availability. Do not reuse real secrets in experiments. Check {s4} and the actual target amendment status before implementation.
- `ask-whether-the-task-needs-a-trust-l.0a67f2fc` — class (c) in all nine languages
  - en: Ask whether the task needs a trust line at all. Reading a public record needs no signature. Receiving native XRP needs no trust line. Avoid adding a setting just because an advertisement labels it mandatory.
- `assume-a-leaked-seed-is-permanently.0fc76985` — class (c) in all nine languages
  - en: Assume a leaked seed is permanently compromised.
- `authorization-may-be-required-by-an.060da144` — class (c) in all nine languages
  - en: Authorization may be required by an issuer before a holder can hold its currency. Freeze settings can restrict the asset. Rippling can move value across compatible trust-line relationships as part of payments. No Ripple settings affect those paths; they do not make a token safe or remove issuer risk. Review both account and line settings before changing defaults.
- `before-a-request-exists-write-the-st.eb61acbb` — class (c) in all nine languages
  - en: Before a request exists, write the stored intent: customer/session, expected action, expected signer where required, destination, network, asset, amount, any routing tag, expiry and order reference. A wallet address typed into a box is not proof of control.
- `bind-the-request-identifier-to-o-17.c97a7290` — class (c) in all nine languages
  - en: Bind the request identifier to O-17 on the backend. On notification, fetch the payload result and compare it with that record. Confirm the expected signer and network. For SignIn verify the bound proof and session; there is no payment transaction to pretend was received.
- `blackhole-status.60b409e6` — class (c) in all nine languages
  - en: Blackhole status
- `blind-qr.72c0d255` — class (c) in all nine languages
  - en: Blind QR:
- `blind-signing.3a15e830` — class (c) in all nine languages
  - en: Blind signing:
- `bring-the-project-identity-and-autho.48f611b5` — class (c) in all nine languages
  - en: Bring the project identity and authority notes. You do not need a wallet for this lesson. If you later implement an integration, use a separate test environment and the current official Xaman documentation.
- `bring-your-asset-specification-from.2de6be48` — class (c) in all nine languages
  - en: Bring your asset specification from lesson 1. Know the difference between a public identifier and a secret. You can complete every exercise using the fictional records below; opening an explorer is optional.
- `burn.b96d6af1` — class (c) in es, ja, ko, zh-CN, hi, ar; class (b) in pt-BR, fr, de
  - en: Burn
- `can-a-seed-be-reset.4e3ce397` — class (c) in all nine languages
  - en: Can a seed be reset?
- `can-an-issuer-freeze-native-xrp-usin.99e811b3` — class (c) in all nine languages
  - en: Can an issuer freeze native XRP using its token freeze controls?
- `check-burn-transfer-and-uri-mutation.fe95a3bd` — class (c) in all nine languages
  - en: Check burn, transfer and URI-mutation permissions; write down uncertainty rather than assuming defaults.
- `check-delegated-permissions-too.d6011765` — class (c) in all nine languages
  - en: Check delegated permissions too
- `choose-a-publicly-viewable-example-a.976801e6` — class (c) in all nine languages
  - en: Choose a publicly viewable example and locate its NFTokenID, issuer, owner and taxon without connecting a wallet.
- `choose-the-asset-model-on-paper-inte.54d58c47` — class (c) in all nine languages
  - en: Choose the asset model on paper: interchangeable credits suggest a fungible token; one separately identifiable membership collectible suggests an NFT. Record classic trust-line token for this exercise. MPTs are another standard, not a different name for the same setup.
- `compare-against-the-intended-identit.e3f280f0` — class (c) in all nine languages
  - en: Compare against the intended identity and policy. Reject a wrong signer where account control is required; do not silently relabel the order owner.
- `create-a-failure-table-with-input-ex.2a93267d` — class (c) in all nine languages
  - en: Create a failure table with input, expected user message, stored state and recovery. Include rejection, wrong signer/network/asset/recipient, insufficient delivery, request expiry, network outage, duplicate callback, restart and stale data. For each, state what must never happen: no false receipt, duplicate entitlement or silent second payment.
- `create-trustline.c92ac803` — class (c) in all nine languages
  - en: Create trustline
- `creating-a-trustline-is-permission-t.6a7a834b` — class (c) in all nine languages
  - en: Creating a trustline is permission to hold an asset. It isn’t an endorsement, investment guarantee, or security review.
- `creation-does-not-create-buyers-a-ma.30fb7d14` — class (c) in all nine languages
  - en: Creation does not create buyers, a market price or redemption funds. Inspect actual market depth and published redemption terms; never describe an unsupported price as guaranteed value.
- `currency-code-issuer-supply-trustlin.090f0f84` — class (c) in all nine languages
  - en: Currency code, issuer, supply, trustlines, and controls.
- `current-reserve-rules.57f361c2` — class (c) in all nine languages
  - en: Current reserve rules
- `definitions.reserve.many` — class (c) in all nine languages
  - en: 1 $XRP base reserve + {objects} owned objects × 0.2 $XRP.
- `definitions.reserve.one` — class (c) in all nine languages
  - en: 1 $XRP base reserve + {objects} owned object × 0.2 $XRP.
- `definitions.trust.active` — class (c) in all nine languages
  - en: Trustline active. This wallet can now hold this issuer’s TOKEN asset, subject to its limit and settings.
- `definitions.trust.create` — class (c) in all nine languages
  - en: Create Trustline
- `definitions.trust.inactive` — class (c) in all nine languages
  - en: No trustline exists. This wallet can’t hold this issuer’s TOKEN asset.
- `definitions.trust.remove` — class (c) in all nine languages
  - en: Remove Trustline
- `destination-tag.d07f561a` — class (c) in pt-BR, es, fr, ja, ko, zh-CN, hi, ar; class (b) in de
  - en: Destination Tag
- `destination-tags-and-memos.2178c264` — class (c) in all nine languages
  - en: Destination tags and memos
- `dex-amm.22b33553` — class (c) in ; class (b) in pt-BR, es, fr, de, ja, ko, zh-CN, hi, ar
  - en: DEX + AMM
- `dex-offers-and-amms.93651ac8` — class (c) in all nine languages
  - en: DEX, offers, and AMMs
- `distinguish-balance-limit-controls-a.e936c1d1` — class (c) in all nine languages
  - en: {s1} distinguish balance, limit, controls and reserves.
- `do-you-need-a-trust-line-to-receive.e5034039` — class (c) in all nine languages
  - en: Do you need a trust line to receive native XRP?
- `does-a-trustline-prove-safety.e60fa2c6` — class (c) in all nine languages
  - en: Does a trustline prove safety?
- `does-changing-an-app-password-fix-a.002dd115` — class (c) in all nine languages
  - en: Does changing an app password fix a leaked seed?
- `does-disabling-master-signing-disabl.02780c47` — class (c) in all nine languages
  - en: Does disabling master signing disable a regular key too?
- `does-freezing-an-issued-token-mean-t.021d0f68` — class (c) in all nine languages
  - en: Does freezing an issued token mean the issuer can freeze the holder native XRP?
- `draw-a-box-for-each-account-from-les.ad557ea8` — class (c) in all nine languages
  - en: Draw a box for each account from lesson 1. Under each, list enabled master signing, regular key and signer-list route separately. Add unknown if the public record does not answer a question; do not request anyone secret to complete the map.
- `estimate-the-reserve-for-a-simple-ac.4984109c` — class (c) in all nine languages
  - en: Estimate the reserve for a simple account. Actual ownership and reserve behavior can vary by object type.
- `every-displayed-xrp-is-spendable-som.2dedfbaa` — class (c) in all nine languages
  - en: {s1} Every displayed $XRP is spendable.{br2}{s3} Some may be required for account and owner reserves.
- `explain-why-xrp-needs-no-trust-line.ce59177b` — class (c) in all nine languages
  - en: Explain why XRP needs no trust line and why a ticker alone is insufficient.
- `explain-your-answer-without-looking.0a3835d8` — class (c) in all nine languages
  - en: Explain your answer without looking at the worked example, then compare. If you guessed, revisit the relevant section. The checkboxes and quiz feedback stay on this page only; keep your project notes yourself.
- `family-access-planning-and-ledger-si.553a225c` — class (c) in all nine languages
  - en: Family access planning and ledger signing authority are different layers; document both without exposing secrets.
- `fee.c6e89c9c` — class (c) in all nine languages
  - en: Fee
- `fictional-issuer-a-has-master-signin.286a3096` — class (c) in all nine languages
  - en: Fictional Issuer A has master signing disabled, a regular key assigned, and a signer list of three people with weight one each and quorum two. This is an inspection example, not a suggested configuration.
- `first-check-the-network-and-exact-as.aadd4c6c` — class (c) in all nine languages
  - en: First check the network and exact asset identity. Display support and ledger existence are different. Do not create repeated trust lines or send money to make a logo appear.
- `flags-uri-taxon-offers-transfer-fees.f3d2bfe9` — class (c) in all nine languages
  - en: Flags, URI, taxon, offers, transfer fees, and lifecycle.
- `follow-a-fictional-neighborhood-club.3379ae6e` — class (c) in all nine languages
  - en: Follow a fictional neighborhood club from workshop credits to a collectible and a booking flow. Each lesson contains definitions, a guided paper worksheet, a worked decision, common mistakes and questions with explanations. Read the lesson, attempt the worksheet before checking the answer, and keep the resulting page of notes. There is no account, score certificate or saved learning profile.
- `footer.rights` — class (c) in all nine languages
  - en: © 2026 House of Cauliman. All rights reserved.
- `for-payments-compare-recipient-asset.6a526a68` — class (c) in all nine languages
  - en: For payments, compare recipient, asset identity, delivered amount and any required destination tag/reference with the stored intent. Partial payments make the requested amount unsafe as a receipt: inspect delivered_amount in metadata. Record a transaction once so a repeat callback cannot grant a second entitlement. Unknown or unavailable ledger evidence stays pending.
- `for-the-signer-list-route-calculate.3ed3575f` — class (c) in all nine languages
  - en: For the signer-list route, calculate that any two weight-one signers reach quorum two, while one does not. Now circle the regular-key route: it is an alternative signing route. A two-person signer list does not force two-person control over every transaction while a separate single-key route remains.
- `freeze-controls.8523f760` — class (c) in all nine languages
  - en: Freeze controls
- `freeze-is-described-as-destroying-to.9896b013` — class (c) in all nine languages
  - en: Freeze is described as destroying tokens
- `freeze-restricts-movement-of-tokens.8ccf6190` — class (c) in all nine languages
  - en: Freeze restricts movement of tokens; clawback can recover an issuer token balance when the capability is enabled. Neither applies to native XRP.
- `freeze-types-and-no-freeze.7a6c33a3` — class (c) in all nine languages
  - en: Freeze types and No Freeze
- `freeze-versus-clawback.0c521a9b` — class (c) in es, fr, de, ja, ko, zh-CN, hi, ar; class (b) in pt-BR
  - en: Freeze versus clawback
- `freeze.5a6b2d30` — class (c) in es, ja, ko, zh-CN, hi, ar; class (b) in pt-BR, fr, de
  - en: Freeze
- `in-a-read-only-explorer-account-view.b057c38f` — class (c) in all nine languages
  - en: In a read-only explorer account view, open the issued balances or trust-line section. Locate the precise currency and peer issuer, then compare balance, limit and any shown freeze/authorization/ripple fields. Identify whose perspective is displayed. If a field is missing from the interface, write not shown rather than assuming disabled. Your learning worksheet can stay fictional if no suitable record is available.
- `in-this-model-a-holder-establishes-a.1894c32f` — class (c) in all nine languages
  - en: In this model, a holder establishes a trust line and the issuer sends issued currency to that holder. A trust line alone does not distribute tokens. Returning a balance to its issuer reduces the amount outstanding. A trust limit is not a project-wide supply cap, and a supply promise on a website is not ledger enforcement. Explain issuance, redemption and remaining authority before promoting the asset.
- `inspect-a-fictional-proposed-sale-nf.f3daf39c` — class (c) in all nine languages
  - en: Inspect a fictional proposed sale: NFT Record N, price 20 XRP, restricted recipient Member C, and a stated expiry. The NFT transfer-fee field 1,000 represents 1%. On an applicable 20 XRP sale that is 0.2 XRP; check the actual sale mode and settlement accounting rather than assuming every displayed price is the seller net.
- `inspect-a-public-account-using-a-rea.e2e1a467` — class (c) in all nine languages
  - en: Inspect a public account using a read-only explorer: look for account flags, regular key, signer list and any delegation records supported by that network. Use the linked official definitions to interpret names. Capture public facts only, with their observation time. A missing explorer panel is not proof that an authority route does not exist; use complete ledger data or leave the item unresolved.
- `inspect-public-information-without-s.3f3b7211` — class (c) in all nine languages
  - en: Inspect public information without signing. Check the full issuer address and network, why a trust line is needed, the proposed limit and flags, issuer authorization/freeze controls, and reserve implications. A public wallet lookup does not require granting a trust line. A large limit is not a quality signal.
- `inspect-signer-weights-quorum-author.ad6c69bd` — class (c) in all nine languages
  - en: Inspect signer weights, quorum, authorized signer identities and the intended account/network. Do not weaken quorum or enable another key as a quick fix.
- `interactive-feedback-requires-javasc.047d8e72` — class (c) in all nine languages
  - en: Interactive feedback requires JavaScript. All lesson content and the worked answer above remain available.
- `is-the-fee-abnormal.20139bf0` — class (c) in all nine languages
  - en: Is the fee abnormal?
- `issuer-authorization-controls-who-ma.0238879b` — class (c) in all nine languages
  - en: Issuer authorization controls who may hold a currency when required. Individual freeze restricts spending through a trust line; deep freeze adds receiving restrictions, with issuer-direct exceptions. Global freeze has broader effects. These token controls do not freeze native XRP. Clawback is a separate capability and should be disclosed separately; it is not another name for freeze.
- `keep-backend-api-secrets-out-of-brow.f5ff651f` — class (c) in all nine languages
  - en: Keep backend API secrets out of browser code. Use a documented Xaman integration model appropriate to the application. These pages have no wallet connection, QR signing request or submit action.
- `keep-the-seed-offline-and-private.ac2d7a8b` — class (c) in all nine languages
  - en: Keep the seed offline and private.
- `learn-and-inspect-first-no-wallet-co.b6c6fd0a` — class (c) in all nine languages
  - en: Learn and inspect first. No wallet connection, seed entry, signing or transactions on this page.
- `learn-custody-seeds-signing-funding.0a144ab8` — class (c) in all nine languages
  - en: Learn custody, seeds, signing, funding, account control, and recovery limits.
- `learn-payments-destination-tags-trus.fce7b359` — class (c) in all nine languages
  - en: Learn payments, destination tags, trustlines, token trades, NFTs, offers, and execution.
- `ledger-objects-can-affect-the-xrp-re.e36fd0f5` — class (c) in all nine languages
  - en: Ledger objects can affect the XRP reserve needed by an account. Reserve rules and amounts can change, and trust-line exceptions exist: check the current network rules rather than assuming every line costs the same. Setting a limit to zero does not erase a nonzero balance or guarantee immediate removal. A removable line must meet the ledger’s default-state conditions.
- `list-the-evidence-a-reviewer-needs-e.71edfb57` — class (c) in all nine languages
  - en: List the evidence a reviewer needs: exact asset identity; who can issue or change controls; distribution records; redemption terms; any claimed cap mechanism; and what remains unknown. Use lesson 4 to complete the authority section instead of assuming the account cannot change.
- `list-the-issuer-operational-accounts.7d59a5dd` — class (c) in all nine languages
  - en: List the issuer, operational accounts, enabled master signing, regular key and signer list. A regular key can authorize most account actions; it is not merely a read-only API credential. Disabling master signing does not prove that all other signing routes are gone.
- `list-token-controls-separately-from.1cffbef3` — class (c) in all nine languages
  - en: List token controls separately from keys: required authorization, individual/deep/global freeze, No Freeze and clawback capability. Explain the effect on holders and the evidence you inspected. Do not translate a restriction on one token relationship into a restriction on XRP or every asset.
- `mainnet-currently-uses-a-plus-these.85124d92` — class (c) in all nine languages
  - en: Mainnet currently uses a {s1} plus {s2}. These values can change through validator fee voting, so software should query the network instead of hard-coding them forever.
- `mark-irreversible-or-order-sensitive.88613afa` — class (c) in all nine languages
  - en: Mark irreversible or order-sensitive choices. No Freeze cannot be undone. Trust-line clawback must be deliberately enabled under its account requirements before the issuer has populated its owner directory; it is not a recovery button an issuer can freely add later. Check the exact current AccountSet rules before implementation.
- `master-key.15d812b8` — class (c) in pt-BR, es, ja, ko, zh-CN, hi, ar; class (b) in fr, de
  - en: Master Key
- `master-key.68952d53` — class (c) in es, de, ja, ko, zh-CN, hi, ar; class (b) in pt-BR, fr
  - en: Master key
- `meta.definitions.description` — class (c) in all nine languages
  - en: Understand the XRP Ledger, wallets, accounts, issuers, trustlines, reserves, tokens, transactions, the DEX, AMMs, NFTs, and how they all connect.
- `meta.reality.description` — class (c) in all nine languages
  - en: Price, liquidity, slippage, issuer controls, concentration, cycles, and the risk people ignore until it hurts.
- `meta.safety.description` — class (c) in all nine languages
  - en: Issuer verification, phishing defense, signing review, custody risk, and what to do when something goes wrong.
- `meta.trust-lines.description` — class (c) in all nine languages
  - en: A trust line records a relationship between accounts for one currency. “Trust” here does not mean the issuer has been approved as safe.
- `meta.trust-lines.title` — class (c) in all nine languages
  - en: Trust lines | Builders Hub | XRPL LAYMAN
- `meta.usage.description` — class (c) in all nine languages
  - en: Payments, tags, trustlines, offers, AMMs, NFTs, and how XRPL transactions execute.
- `meta.wallet.description` — class (c) in all nine languages
  - en: Control, custody, seeds, signing, funding, recovery, and the mistakes that cost people everything.
- `meta.xaman.title` — class (c) in all nine languages
  - en: Xaman flows | Builders Hub | XRPL LAYMAN
- `mint-burn-and-offer.04456e16` — class (c) in all nine languages
  - en: Mint, burn and offer
- `mint-creates-the-nft-burn-destroys-i.a7c1145f` — class (c) in all nine languages
  - en: Mint creates the NFT; burn destroys its ledger token; an offer proposes an exchange and can remain unaccepted.
- `multisigning.632671a2` — class (c) in es, ja, ko, zh-CN, hi, ar; class (b) in pt-BR, fr, de
  - en: Multisigning
- `neb-s-public-page-describes-a-future.2da289c9` — class (c) in all nine languages
  - en: NEB’s public page describes a future trading system. Its preview is not evidence of live feeds or execution.
- `never-change-rippling-freeze-or-auth.5af57760` — class (c) in all nine languages
  - en: Never change rippling, freeze or authorization flags just to clear a warning you do not understand. A successful TrustSet is a settings change, not a purchase or a safety endorsement.
- `never-type-your-seed-into-a-random-w.9a621f43` — class (c) in all nine languages
  - en: Never type your seed into a random website.
- `nftokenmint-sets-important-flags-tra.4a3171c3` — class (c) in all nine languages
  - en: NFTokenMint sets important flags. Transferable allows transfers between ordinary holders; without it, issuer-related transfers have special restrictions. Burnable gives the issuer or its authorized party burn authority; owners can burn their own NFTs. A mutable NFT can have its URI updated by the issuer or authorized minter through NFTokenModify. Do not assume every NFT’s metadata pointer is fixed.
- `nftokenmodify-authority-is-separate.989d0e2a` — class (c) in all nine languages
  - en: NFTokenModify authority is separate from ordinary ownership.
- `nfts-move-through-mint-offer-accept.c0ce1be3` — class (c) in all nine languages
  - en: NFTs move through mint, offer, accept, transfer, and burn transactions.
- `no-freeze-permanently-gives-up-indiv.bc752856` — class (c) in all nine languages
  - en: No Freeze permanently gives up individual and deep-freeze authority and the ability to clear a global freeze; it is not a general promise that no restriction can ever exist. Blackholing aims to remove usable signing authority. Neither label proves fair distribution, liquidity, backing or safe application code. Inspect actual account settings and every signing route rather than relying on a badge.
- `no-the-regular-key-remains-a-signing.03e57ab8` — class (c) in all nine languages
  - en: No. The regular key remains a signing route with broad powers. Inspect its presence and the signer list, then document which actions remain possible. Public evidence of account configuration cannot prove how securely somebody stores a secret or whether a private key is truly unknown.
- `no-trustline-exists.e4056ea4` — class (c) in all nine languages
  - en: No trustline exists.
- `no-trustline-needed.3867ff13` — class (c) in all nine languages
  - en: No trustline needed
- `official-permission-delegation-guida.680580b1` — class (c) in all nine languages
  - en: Official permission delegation guidance and current warnings
- `on-a-read-only-explorer-select-the-i.cdb893fe` — class (c) in all nine languages
  - en: On a read-only explorer, select the intended network and search the full NFTokenID. Locate the current owner, issuer, taxon, flags and URI. Decode flags using the linked transaction reference if the explorer does not explain them. Record the observation time and ledger if available. Treat remote metadata links as untrusted content; do not sign a request to reveal a picture.
- `our-fictional-neighborhood-club-want.30fb4b14` — class (c) in all nine languages
  - en: Our fictional neighborhood club wants members to reserve workshop seats with credits. Carry this same project through the course. Labels such as Issuer A are paper labels, not usable addresses. The point is to find missing decisions before anyone creates an asset.
- `owned-trustlines.fa5a4cf5` — class (c) in all nine languages
  - en: Owned trustlines
- `ownership-alone-is-not-editing-permi.008cb31b` — class (c) in all nine languages
  - en: Ownership alone is not editing permission. For a mutable NFT, NFTokenModify is limited to the issuer or authorized minter; network amendment and wallet support also matter.
- `payment-trustline-offer-nft-offer-or.5e4d07c6` — class (c) in all nine languages
  - en: Payment, trustline, offer, NFT offer, or account setting?
- `phishing-and-fake-connection-flows.27a92c45` — class (c) in all nine languages
  - en: Phishing and fake connection flows
- `plan-for-reserves-and-removal.05cef868` — class (c) in all nine languages
  - en: Plan for reserves and removal
- `plan-reserve-inspection-separately-f.62e08c92` — class (c) in all nine languages
  - en: Plan reserve inspection separately from the token quantity. Obtain the network current base/incremental reserves and the account relevant owner objects when implementing a real tool. Do not multiply every visible token balance by one fixed XRP charge: trust-line and other object rules have exceptions.
- `prove-mismatched-payments-cannot-unl.c94250d1` — class (c) in all nine languages
  - en: Prove mismatched payments cannot unlock access, duplicates cannot double-credit, expiry and network outages recover, and records survive restart. Review the exact release diff, account authority and fee disclosures; rehearse backup/restore and rollback; assign support and monitoring. One happy-path payment is not full acceptance.
- `quorum.fdaafe2d` — class (c) in pt-BR, es, ja, ko, zh-CN, hi, ar; class (b) in fr, de
  - en: Quorum
- `read-balance-limit-issuer-controls-a.88aa5ddc` — class (c) in all nine languages
  - en: {s1} Read balance, limit, issuer controls and reserve implications without confusing a settings change with receiving money.
- `record-the-network-nftokenid-issuer.20050e5d` — class (c) in all nine languages
  - en: Record the network, NFTokenID, issuer, current owner and taxon. A taxon groups related NFTs from an issuer; it is not proof of rarity or a promise that a collection is finished. Ownership and minting are different roles.
- `redemption.843604af` — class (c) in all nine languages
  - en: Redemption
- `regular-key.26e205f4` — class (c) in pt-BR, es, ja, ko, zh-CN, hi, ar; class (b) in fr, de
  - en: Regular Key
- `regular-key.77459c09` — class (c) in es, de, ja, ko, zh-CN, hi, ar; class (b) in pt-BR, fr
  - en: Regular key
- `regular-keys-and-multisigning.5d237b3f` — class (c) in all nine languages
  - en: Regular keys and multisigning
- `regular-keys.33fe0531` — class (c) in pt-BR, es, ja, ko, zh-CN, hi, ar; class (b) in fr, de
  - en: Regular Keys
- `rehearse-an-uncertain-transaction-a.dd025fa6` — class (c) in all nine languages
  - en: Rehearse an uncertain transaction: a hash exists but a lookup cannot find it. Keep the original intent and bounded expiry evidence. Ask whether the queried server has the required history and has passed the relevant ledger boundary before concluding non-inclusion. Do not issue a fresh payment merely because one lookup was empty.
- `reserve-calculator.67176307` — class (c) in all nine languages
  - en: Reserve calculator
- `reserve.187579e3` — class (c) in pt-BR, es, fr, ja, ko, zh-CN, hi, ar; class (b) in de
  - en: Reserve
- `reserves.5ac63fc4` — class (c) in all nine languages
  - en: Reserves
- `review-regular-key-and-signer-list-s.f0f0de49` — class (c) in all nine languages
  - en: Review regular-key and signer-list settings.
- `rotate-regular-keys-or-signer-lists.e8c00579` — class (c) in all nine languages
  - en: Rotate regular keys or signer lists when appropriate.
- `save-a-one-page-asset-specification.286034dc` — class (c) in all nine languages
  - en: Save a one-page asset specification with purpose, chosen standard, network, identity, redemption terms, supply calculation and open authority questions. In lesson 2 you will add a separate collectible; do not treat the credit and collectible as the same asset.
- `save-the-authority-map-and-plain-eng.f68c90c5` — class (c) in all nine languages
  - en: Save the authority map and plain-English control disclosure. Have another person explain how the regular key changes the two-of-three example. If they cannot, improve the explanation before proceeding to the signing-flow lesson.
- `scammers-can-trick-you-into-authoriz.82c7e021` — class (c) in all nine languages
  - en: Scammers can trick you into authorizing the transaction yourself.
- `secret-seed.e3cdd578` — class (c) in all nine languages
  - en: Secret seed
- `seed-shared.43114c2d` — class (c) in all nine languages
  - en: Seed shared:
- `seed.32fe9f5b` — class (c) in es, ja, ko, zh-CN, hi, ar; class (b) in pt-BR, fr, de
  - en: Seed
- `seeds-keys-and-signatures.5b661568` — class (c) in all nine languages
  - en: Seeds, keys, and signatures
- `separate-a-balance-restriction-from.9ab9e330` — class (c) in all nine languages
  - en: Separate a balance restriction from clawback or NFT burning. Ask for the exact asset standard and control being used.
- `separate-freeze-authorization-clawba.254e71c0` — class (c) in all nine languages
  - en: Separate freeze, authorization, clawback and signing authority in your disclosure.
- `separate-product-revenue-from-xrpl-n.48a70ebe` — class (c) in all nine languages
  - en: Separate product revenue from XRPL network fees.
- `separate-recovery-layers-reverting-a.e8e2e17b` — class (c) in all nine languages
  - en: Separate recovery layers. Reverting a page can hide a bad button; restoring a database can lose newer legitimate receipts; neither reverses ledger transfers. Document backup boundaries, restore verification and how reconciliation preserves transactions after the backup point.
- `settings-that-can-control-whether-th.33debda7` — class (c) in all nine languages
  - en: Settings that can control whether the NFT is transferable and whether the issuer can burn it.
- `signer-list.166a4390` — class (c) in pt-BR, es, ja, ko, zh-CN, hi, ar; class (b) in fr, de
  - en: Signer List
- `simple-slippage-visual.076d9ff0` — class (c) in all nine languages
  - en: Simple slippage visual
- `slippage-and-pool-depth.e68d4e14` — class (c) in all nine languages
  - en: Slippage and pool depth
- `slippage.98bc091b` — class (c) in es, ja, ko, zh-CN, hi, ar; class (b) in pt-BR, fr, de
  - en: Slippage
- `someone-asks-for-your-seed.d7298656` — class (c) in all nine languages
  - en: {s1} Someone asks for your seed.
- `start-here-be-able-to-distinguish-a.8a3a6b4c` — class (c) in all nine languages
  - en: Start here. Be able to distinguish a public account address from a private signing secret. If that is unfamiliar, read Wallet Basics first. You need only a notebook; no account, funds or coding tools.
- `technical-references-checked-3-octob.9bab9f8c` — class (c) in all nine languages
  - en: Technical references checked 3 October 2026. Network amendments, wallet support and reserve rules can change. Check current documentation before implementing real transactions.
- `the-club-calls-this-collectible-perm.688a760e` — class (c) in all nine languages
  - en: The club calls this collectible permanent, but the sample explicitly permits URI changes and issuer-authorized burning. Rewrite the claim as: a transferable collectible with disclosed issuer controls and externally hosted content. State the preservation plan and license separately. A clearer promise is more useful than a permanence badge.
- `the-club-now-proposes-an-optional-co.3e0bfebc` — class (c) in all nine languages
  - en: The club now proposes an optional commemorative NFT. It is separate from the credits. Use this fictional record: network Testnet; NFT identity Record N; issuer Issuer A; owner Member B; transferable yes; burnable yes; mutable yes; transfer-fee field 1,000; URI an HTTPS metadata page. These are descriptive fields, not transaction JSON.
- `the-minimum-combined-signer-weight-n.8c1f333f` — class (c) in all nine languages
  - en: The minimum combined signer weight needed for a multi-signed transaction.
- `the-network-fee-goes-to-validators-x.e7651eb0` — class (c) in all nine languages
  - en: {s1} The network fee goes to validators.{br2}{s3} XRPL transaction costs are destroyed.
- `the-screenshot-does-not-identify-the.90d66079` — class (c) in all nine languages
  - en: The screenshot does not identify the NFT. Obtain its network and NFTokenID, inspect issuer and owner, then inspect flags and URI. Mutable metadata and external hosting require a disclosure and preservation plan. Ledger ownership does not automatically transfer copyright or prove permanent image availability.
- `the-secret-authority-that-proves-you.94c08ea2` — class (c) in all nine languages
  - en: The secret authority that proves you control the account. Whoever controls the keys controls the account.
- `the-server-side-part-of-an-applicati.d228df9c` — class (c) in all nine languages
  - en: The server-side part of an application where secrets and authoritative order checks belong.
- `the-website-says-nobody-can-alter-th.18cab641` — class (c) in all nine languages
  - en: The website says nobody can alter the asset because master signing is disabled. Your map shows a regular key. Replace the claim with an accurate statement of the enabled routes and remaining capabilities. You do not have enough evidence to claim nobody knows a key, or to certify the team storage practices.
- `think-of-xrpl-as-the-shared-database.0c61a794` — class (c) in all nine languages
  - en: Think of XRPL as the shared database underneath the apps. Xaman, exchanges, explorers, games, and marketplaces are interfaces. The ledger’s the record they’re reading and writing to.
- `this-is-an-inspection-exercise-not-a.3723d0c3` — class (c) in all nine languages
  - en: This is an inspection exercise, not a blackholing recipe. Do not disable keys, set irreversible flags or remove signers while following this lesson.
- `this-lesson-follows-the-classic-trus.fc252c0f` — class (c) in all nine languages
  - en: This lesson follows the classic trust-line token model. XRPL also has Multi-Purpose Tokens (MPTs), with different identifiers and capabilities. Choose the standard deliberately and check the intended network and wallet support before following a tutorial. These lessons do not create either kind of token.
- `total-balance-is-not-the-same-as-xrp.cd4ebe84` — class (c) in all nine languages
  - en: Total balance is not the same as XRP available above reserve and fee needs. Check the exact result and current reserve rules before changing unrelated settings.
- `transfer-fee.3a7f5395` — class (c) in all nine languages
  - en: Transfer Fee
- `trust-line.ecacf5fe` — class (c) in es, de, ja, ko, zh-CN, hi, ar; class (b) in pt-BR, fr
  - en: Trust line
- `trust-lines.145a705b` — class (c) in es, de, ja, ko, zh-CN, hi, ar; class (b) in pt-BR, fr
  - en: Trust lines
- `trust-lines.d4c063e8` — class (c) in es, fr, de, ja, ko, zh-CN, hi, ar; class (b) in pt-BR
  - en: Trust lines:
- `trust-lines.fdb24683` — class (c) in es, de, ja, ko, zh-CN, hi, ar; class (b) in pt-BR, fr
  - en: {s1}Trust lines
- `trustline-usually-required.cb68ce8d` — class (c) in all nine languages
  - en: Trustline usually required
- `trustline-visualizer.1fb70a8d` — class (c) in all nine languages
  - en: Trustline visualizer
- `trustline.9ba9cbe8` — class (c) in es, ja, ko, zh-CN, hi, ar; class (b) in pt-BR, fr, de
  - en: Trustline
- `trustlines.57b2be31` — class (c) in es, ja, ko, zh-CN, hi, ar; class (b) in pt-BR, fr, de
  - en: Trustlines
- `trustset-creates-or-modifies-a-trust.a6fb1a7c` — class (c) in all nine languages
  - en: TrustSet creates or modifies a trust-line relationship. Its LimitAmount identifies the currency, the counterparty issuer and the limit. Native XRP does not use trust lines. This lesson covers trust-line tokens, not MPT authorization.
- `two-of-three-signers-exist-alongside.90b1f87d` — class (c) in all nine languages
  - en: Two-of-three signers exist alongside an enabled regular key. Is every action forced through two people?
- `usage.slippage.copy` — class (c) in all nine languages
  - en: Trade size is {pct}% of the selected pool side before a {fee}% fee.
- `use-separate-test-accounts-and-a-non.d2a66d3c` — class (c) in all nine languages
  - en: Use separate test accounts and a non-production network. Rehearse rejected signatures, expiry, insufficient funds/reserve, wrong network, unavailable RPC and duplicate callbacks. Keep secrets outside frontend assets and logs. Verify current wallet support and amendment availability for the actual network; a documentation page is not evidence of activation everywhere.
- `use-the-exact-asset-identity-from-le.4fd4d9d1` — class (c) in all nine languages
  - en: Use the exact asset identity from lesson 1. A trust line belongs to the classic fungible-token model; this is not an NFT purchase or native XRP setup. No signing is needed for this worksheet.
- `used-for-reserves-and-transaction-co.64cd2832` — class (c) in all nine languages
  - en: Used for reserves and transaction costs
- `what-a-trustline-doesn-t-mean.c56a66d8` — class (c) in all nine languages
  - en: What a trustline doesn’t mean
- `what-does-a-destination-tag-do.850bd82c` — class (c) in all nine languages
  - en: What does a destination tag do?
- `what-s-a-trustline.b2cf3ed9` — class (c) in all nine languages
  - en: What’s a trustline?
- `where-the-network-supports-permissio.1ed55fc2` — class (c) in all nine languages
  - en: Where the network supports permission delegation, an account can authorize another account to perform specified actions. A delegate is not the same as a regular key or a signer on the owner account. Include existing delegation records and their exact permissions in a real authority review; a map containing only three key routes may be incomplete. Check current amendment support and the official permission-specific warnings before using this feature. This course does not configure delegation.
- `why-some-xrp-stays-reserved.bb60d0fd` — class (c) in all nine languages
  - en: Why some $XRP stays reserved
- `withdrawal-freeze.01e58e5e` — class (c) in all nine languages
  - en: Withdrawal freeze
- `write-a-departure-plan-resolve-the-h.e40c2a02` — class (c) in all nine languages
  - en: Write a departure plan: resolve the held balance through a deliberate redemption or transfer decision, then inspect non-default line settings on both sides. Setting the limit to zero alone is not proof the line disappeared. There can still be a balance or other state keeping it present.
- `write-a-one-page-release-contract-us.4be7eeff` — class (c) in all nine languages
  - en: Write a one-page release contract: user outcome, scope, identities, controls, fees and limitations.
- `write-a-redemption-promise-one-credi.303df116` — class (c) in all nine languages
  - en: Write a redemption promise: one credit reserves one eligible seat, subject to the written booking terms. Decide cancellations, expiry, refunds, support and what happens if the club closes. The token protocol does not write or enforce those business terms for you.
- `write-a-user-disclosure-with-three-c.e47148cd` — class (c) in all nine languages
  - en: Write a user disclosure with three columns: capability, present evidence and operating policy. Example: regular key present / observed account field / club says two staff approve its use. Label the last column as policy, not a protocol guarantee.
- `write-down-the-problem-intended-user.45e28e9c` — class (c) in all nine languages
  - en: Write down the problem, intended user and smallest useful outcome. Publish exact asset identities, account roles, remaining issuer authority, product fees and network costs. Distinguish a prototype, a test-network rehearsal and a working Mainnet feature. Avoid promising profit, permanent availability or a security guarantee you cannot establish.
- `write-recovery-scenarios-on-paper-on.cab7e62d` — class (c) in all nine languages
  - en: Write recovery scenarios on paper: one signer unavailable; two unavailable; one compromised; the regular-key custodian absent. State which actions remain possible and who decides to pause operations. A private off-ledger promise to require two approvals is not the same as ledger enforcement.
- `write-the-purpose-exact-asset-identi.636d0341` — class (c) in all nine languages
  - en: {s1} write the purpose, exact asset identity, redemption promise and supply questions.
- `xaman-credential-boundaries.55db3d97` — class (c) in all nine languages
  - en: Xaman credential boundaries
- `xaman-flows.2d4dd6fc` — class (c) in all nine languages
  - en: Xaman flows
- `xaman-flows.811c9129` — class (c) in all nine languages
  - en: Xaman flows:
- `xaman-flows.c8a29412` — class (c) in all nine languages
  - en: {s1}Xaman flows
- `xaman-implementation-checklist.b10f39bc` — class (c) in all nine languages
  - en: Xaman implementation checklist
- `xaman-implementation-checks.cc5808c1` — class (c) in all nine languages
  - en: Xaman implementation checks
- `xaman-payload-concepts.1ddf0450` — class (c) in all nine languages
  - en: Xaman payload concepts
- `xrp-is-native-trust-lines-describe-i.d8c8105e` — class (c) in all nine languages
  - en: XRP is native; trust lines describe issued currencies.
- `xrp-that-must-remain-available-to-su.dfbf0556` — class (c) in all nine languages
  - en: XRP that must remain available to support an account and relevant ledger objects; it is different from a transaction fee.
- `xrpl-lets-accounts-separate-everyday.ce4f8952` — class (c) in all nine languages
  - en: XRPL lets accounts separate everyday signing from the master key and require multiple signers.
- `xrpl-s-dex-uses-offers-to-exchange-o.3578c8fc` — class (c) in all nine languages
  - en: XRPL’s DEX uses offers to exchange one asset for another.
- `yes-the-signer-list-overrides-every.25ea3015` — class (c) in all nine languages
  - en: Yes; the signer list overrides every other key
- `your-account-usually-needs-a-trustli.bee0965e` — class (c) in all nine languages
  - en: Your account usually needs a trustline to the exact issuer and currency.
- `your-seed-isn-t-a-password-there-s-n.3a1be27d` — class (c) in all nine languages
  - en: Your seed isn’t a password. There’s no reset desk behind the ledger.

Count of class (c) rows above: 229 keys have at least one language in class (c). Per-language (c) totals are in the counts table.

