# XRPL LAYMAN review package: Português (Brasil)

This file is for a native speaker of Português (Brasil). You do not need the website source code, and you do not need to open the site. The English sentence and the current Português (Brasil) translation are both in this file. The CSV next to this file has the same rows.

Nothing in this package is native-approved. The Approve, Correction, Reviewer, and Date lines are blank on purpose.

## How to review

1. Read one row at a time. The sections follow this order: wallet recovery and seed, signing, destination tags, trust lines, reserves and fees, DEX and AMM, NFTs, then other security and finance copy.
2. A sentence is filed under the first matching section. Seed wins over every later topic. A destination-tag sentence is in the destination-tag section even if it also mentions signing.
3. Decide whether a reader of Português (Brasil) learns the same fact as the English, including every “not”, “never”, and “cannot”. A quiz answer that is false in English must stay false.
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
- Current translation: Um segredo que uma pessoa consegue guardar e que pode derivar as chaves. Não é uma senha que você possa redefinir.
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
- Current translation: Uma signer list atribui pesos e um quórum. Por exemplo, três signatários independentes de peso um com quórum dois exigem assinaturas válidas suficientes para chegar a dois. Isso só protege o caminho de assinatura pretendido: revise também qualquer master key ou regular key ativada. Teste a recuperação numa rede que não seja de produção antes de mover a autoridade.
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
- Current translation: Um payload do Xaman é um pedido de assinatura. Seu produto deve primeiro explicar a ação, a rede, a conta que assina, o ativo exato, o destinatário e a quantia ou as permissões. Um sign-in identifica uma conta; não é um pagamento. Nunca peça que usuários colem uma seed, números secretos ou uma chave privada na sua página.
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
- Current translation: {s1} são material de aprendizado somente leitura, com exemplos fictícios e retorno local de quiz. {s2} é um ledger separado para um ensaio posterior de implementação; os ativos de teste dele não pagam despesas da Mainnet. {s3} carrega ativos reais e consequências. Devnet pode incluir mudanças experimentais; sucesso ali não estabelece disponibilidade na Mainnet. Não reutilize segredos reais em experimentos. Confira {s4} e o status real do amendment alvo antes da implementação.
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
- Current translation: Trate uma seed vazada como comprometida de forma permanente.
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
- Current translation: Traga a especificação do ativo da lição 1. Saiba a diferença entre um identificador público e um segredo. Você pode completar todos os exercícios com os registros fictícios abaixo; abrir um explorer é opcional.
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
- Current translation: Uma seed pode ser redefinida?
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
- Current translation: Crie uma tabela de falhas com entrada, mensagem esperada para o usuário, estado armazenado e recuperação. Inclua rejeição, signatário/rede/ativo/destinatário errados, entrega insuficiente, expiração do pedido, queda da rede, callback duplicado, reinicialização e dados velhos. Para cada um, declare o que nunca deve acontecer: recibo falso, direito duplicado ou segundo pagamento silencioso.
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
- Current translation: Trocar a senha de um aplicativo conserta uma seed vazada?
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
- Current translation: Desenhe uma caixa para cada conta da lição 1. Embaixo de cada uma, liste à parte master signing ativado, regular key e caminho de signer list. Acrescente desconhecido se o registro público não responde a uma pergunta; não peça o segredo de ninguém para completar o mapa.
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
- Current translation: O planejamento de acesso da família e a autoridade de assinatura no ledger são camadas diferentes; documente as duas sem expor segredos.
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
- Current translation: O freeze restringe o movimento de tokens; o clawback pode recuperar um saldo de token do emissor quando a capacidade está ativada. Nenhum dos dois se aplica ao XRP nativo.
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
- Current translation: Mantenha segredos de API do backend fora do código do navegador. Use um modelo documentado de integração com o Xaman adequado ao aplicativo. Estas páginas não têm conexão de carteira, pedido de assinatura por QR nem ação de envio.
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
- Current translation: Mantenha a seed offline e em sigilo.
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
- Current translation: Aprenda e inspecione primeiro. Nesta página não há conexão de carteira, entrada de seed, assinatura nem transações.
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
- Current translation: Aprenda custódia, seeds, assinatura, abastecimento, controle da conta e limites da recuperação.
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
- Current translation: Marque escolhas irreversíveis ou que dependem da ordem. No Freeze não pode ser desfeito. O clawback de trust line precisa ser ativado de propósito, sob os requisitos da conta, antes de o emissor ter preenchido o owner directory; não é um botão de recuperação que o emissor possa acrescentar livremente depois. Confira as regras atuais exatas de AccountSet antes da implementação.
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
- Current translation: Controle, custódia, seeds, assinatura, abastecimento, recuperação e os erros que custam tudo às pessoas.
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
- Current translation: Nunca digite sua seed num site qualquer.
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
- Current translation: Não. A regular key continua sendo um caminho de assinatura com poderes amplos. Inspecione a presença dela e a signer list, depois documente quais ações ainda são possíveis. Evidência pública da configuração da conta não pode provar com que segurança alguém guarda um segredo, nem se uma chave privada é de fato desconhecida.
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
- Current translation: Prove que pagamentos divergentes não liberam acesso, que duplicatas não geram crédito em dobro, que a recuperação após expiração e queda de rede funciona e que os registros sobrevivem a uma reinicialização. Revise o diff exato do lançamento, a autoridade da conta e as informações divulgadas sobre taxas; ensaie backup/restauração e rollback; atribua responsáveis pelo suporte e pelo monitoramento. Um pagamento bem-sucedido no cenário ideal não basta para a aceitação completa.
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
- Current translation: Seed secreta
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
- Current translation: Seed compartilhada:
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
- Current translation: Seeds, chaves e assinaturas
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
- Current translation: Separe as camadas de recuperação. Reverter uma página pode esconder um botão ruim; restaurar um banco de dados pode perder recibos legítimos mais novos; nenhum dos dois reverte transferências do ledger. Documente os limites do backup, a verificação da restauração e como a reconciliação preserva transações posteriores ao ponto do backup.
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
- Current translation: {s1} Alguém pede a sua seed.
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
- Current translation: Comece aqui. Consiga distinguir um endereço público de conta de um segredo privado de assinatura. Se isso for novidade, leia primeiro as noções básicas de carteira. Você só precisa de um caderno; sem conta, fundos ou ferramentas de código.
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
- Current translation: A autoridade secreta que prova que você controla a conta. Quem controla as chaves controla a conta.
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
- Current translation: A parte do aplicativo que fica no servidor, onde devem estar os segredos e as conferências oficiais do pedido.
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
- Current translation: Use contas de teste separadas e uma rede que não seja de produção. Ensaie assinaturas rejeitadas, expiração, fundos/reserva insuficientes, rede errada, RPC indisponível e callbacks duplicados. Mantenha segredos fora dos arquivos de frontend e dos logs. Verifique o suporte atual da carteira e a disponibilidade do amendment para a rede real; uma página de documentação não é evidência de ativação em todo lugar.
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
- Current translation: Escreva no papel cenários de recuperação: um signatário indisponível; dois indisponíveis; um comprometido; o custodiante da regular key ausente. Declare quais ações continuam possíveis e quem decide pausar as operações. Uma promessa privada, fora do ledger, de exigir duas aprovações não é o mesmo que uma exigência imposta pelo ledger.
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
- Current translation: Sua seed não é uma senha. Não existe um balcão de redefinição por trás do ledger.
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
- Current translation: Um callback é um motivo para o backend buscar o resultado do payload, não uma prova para confiar às cegas. Confira o estado resolvido/assinado, a conta esperada e a rede pretendida. Para uma transação no ledger, busque o hash da transação e verifique a validação, o resultado e a operação exata pretendida. Um pedido assinado ainda pode falhar ou continuar sem resolução no ledger.
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
- Current translation: Um clube fictício propõe 1.000 créditos CLUB. A ficha de lançamento lista um logo e um ticker, mas não tem endereço do emissor, política de resgate nem autoridade de assinatura. O que precisa ser acrescentado antes de um membro identificar o ativo ou julgar a promessa?
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
- Current translation: Uma configuração de multisigning que exige peso suficiente de signatários.
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
- Current translation: Um projeto diz “master key desativada, portanto ninguém pode mudar nada.” A conta ainda tem uma regular key ativada. A conclusão se sustenta?
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
- Current translation: Uma regular key é um caminho separado de assinatura.
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
- Current translation: Uma mensagem de suporte diz que seus 25 créditos estão presos porque seu limite é só 100 e pede que você assine um limite ilimitado. Essa explicação não decorre do exemplo. Inspecione primeiro a falha exata, o emissor/rede, a autorização, os freezes, o destino e a operação pretendida. Aumentar um limite não é um conserto geral para problemas de token.
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
- Current translation: Uma tentativa de remover a autoridade de assinatura utilizável da conta. Trate isso como uma decisão permanente de perda de controle, não como uma nota de segurança.
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
- Current translation: Um explorer pede uma assinatura só para inspecionar uma trust line pública. Isso é necessário para ler?
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
- Current translation: Pergunte se a tarefa precisa de uma trust line. Ler um registro público não exige assinatura. Receber XRP nativo não exige trust line. Evite acrescentar uma configuração só porque um anúncio diz que ela é obrigatória.
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
- Current translation: Antes de existir um pedido, escreva a intenção armazenada: cliente/sessão, ação esperada, signatário esperado quando for exigido, destino, rede, ativo, quantia, qualquer tag de encaminhamento, expiração e referência do pedido. Um endereço de carteira digitado numa caixa não é prova de controle.
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
- Current translation: Vincule o identificador do pedido a O-17 no backend. Na notificação, busque o resultado do payload e compare com esse registro. Confirme o signatário esperado e a rede. Para SignIn, verifique a prova vinculada e a sessão; não há transação de pagamento para fingir que foi recebida.
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
- Current translation: QR às cegas:
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
- Current translation: Assinatura às cegas:
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
- Current translation: Confira também as permissões delegadas
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
- Current translation: Compare com a identidade e a política pretendidas. Rejeite um signatário errado quando o controle da conta é exigido; não troque em silêncio o dono do pedido.
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
- Current translation: Desativar o master signing também desativa uma regular key?
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
- Current translation: O Issuer A fictício tem master signing desativado, uma regular key atribuída e uma signer list de três pessoas, cada uma com peso um, e quórum dois. Este é um exemplo de inspeção, não uma configuração sugerida.
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
- Current translation: Para o caminho da signer list, calcule que quaisquer dois signatários de peso um alcançam o quórum dois, e um sozinho não alcança. Agora circule o caminho da regular key: ele é um caminho alternativo de assinatura. Uma signer list de duas pessoas não força o controle de duas pessoas em toda transação enquanto um caminho separado de chave única continuar existindo.
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
- Current translation: Inspecione uma conta pública num explorer somente leitura: procure flags da conta, regular key, signer list e quaisquer registros de delegação aceitos por essa rede. Use as definições oficiais indicadas para interpretar os nomes. Capture só fatos públicos, com o horário da observação. Um painel ausente no explorer não prova que um caminho de autoridade não existe; use dados completos do ledger ou deixe o item sem resolução.
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
- Current translation: Inspecione informação pública sem assinar. Confira o endereço completo do emissor e a rede, por que uma trust line é necessária, o limite e as flags propostos, os controles de autorização/freeze do emissor e os efeitos na reserva. Uma consulta pública de carteira não exige conceder uma trust line. Um limite grande não é sinal de qualidade.
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
- Current translation: Inspecione pesos dos signatários, quórum, identidades autorizadas dos signatários e a conta/rede pretendidas. Não afrouxe o quórum nem ative outra chave como atalho.
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
- Current translation: Liste o emissor, as contas operacionais, o master signing ativado, a regular key e a signer list. Uma regular key pode autorizar a maioria das ações da conta; ela não é só uma credencial de API somente leitura. Desativar o master signing não prova que todos os outros caminhos de assinatura sumiram.
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
- Current translation: Master key
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
- Current translation: Verificação de emissor, defesa contra phishing, revisão da assinatura, risco de custódia e o que fazer quando algo dá errado.
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
- Current translation: No Freeze abre mão de forma permanente da autoridade de individual freeze e de deep freeze e da capacidade de limpar um global freeze; não é uma promessa geral de que nenhuma restrição possa existir. Blackholing busca remover a autoridade de assinatura utilizável. Nenhum dos dois rótulos prova distribuição justa, liquidez, lastro ou código seguro do aplicativo. Inspecione as configurações reais da conta e cada caminho de assinatura, em vez de confiar num selo.
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
- Current translation: Orientação oficial de delegação de permissão e avisos atuais
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
- Current translation: Num explorer somente leitura, selecione a rede pretendida e busque o NFTokenID completo. Localize o dono atual, o emissor, o taxon, as flags e a URI. Decodifique as flags pela referência de transação indicada se o explorer não as explicar. Registre o horário da observação e o ledger, se estiverem disponíveis. Trate links remotos de metadados como conteúdo não confiável; não assine um pedido para revelar uma imagem.
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
- Current translation: Quórum
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
- Current translation: Regular key
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
- Current translation: Regular keys e multisigning
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
- Current translation: Regular keys
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
- Current translation: Revise as configurações de regular key e de signer list.
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
- Current translation: Troque regular keys ou signer lists quando for adequado.
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
- Current translation: Salve o mapa de autoridade e a divulgação dos controles em linguagem simples. Peça a outra pessoa que explique como a regular key muda o exemplo de dois de três. Se ela não conseguir, melhore a explicação antes de seguir para a lição do fluxo de assinatura.
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
- Current translation: Separe freeze, autorização, clawback e autoridade de assinatura na sua divulgação.
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
- Current translation: Signer list
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
- Current translation: O peso combinado mínimo de signatários necessário para uma transação com várias assinaturas.
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
- Current translation: O site diz que ninguém pode alterar o ativo porque o master signing está desativado. Seu mapa mostra uma regular key. Substitua a afirmação por um relato preciso dos caminhos ativados e das capacidades que permanecem. Você não tem evidência suficiente para afirmar que ninguém conhece uma chave, nem para certificar as práticas de armazenamento da equipe.
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
- Current translation: Este é um exercício de inspeção, não uma receita de blackholing. Não desative chaves, não defina flags irreversíveis nem remova signatários enquanto segue esta lição.
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
- Current translation: Há signatários em esquema dois de três junto com uma regular key ativada. Toda ação é forçada a passar por duas pessoas?
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
- Current translation: Use a identidade exata do ativo da lição 1. Uma trust line pertence ao modelo clássico de token fungível; isto não é uma compra de NFT nem uma configuração de XRP nativo. Esta ficha não exige assinatura.
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
- Current translation: Onde a rede aceita delegação de permissão, uma conta pode autorizar outra conta a executar ações especificadas. Um delegado não é o mesmo que uma regular key nem um signatário na conta dona. Inclua registros de delegação existentes e as permissões exatas deles numa revisão real de autoridade; um mapa só com três caminhos de chave pode estar incompleto. Confira o suporte atual de amendment e os avisos oficiais específicos da permissão antes de usar este recurso. Este curso não configura delegação.
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
- Current translation: Escreva uma divulgação para o usuário com três colunas: capacidade, evidência presente e política operacional. Exemplo: regular key presente / campo da conta observado / o clube diz que dois funcionários aprovam o uso. Rotule a última coluna como política, não como garantia do protocolo.
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
- Current translation: O XRPL permite que contas separem a assinatura do dia a dia da master key e exijam vários signatários.
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
- Current translation: Sim; a signer list substitui toda outra chave
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
- Current translation: Destination tags e memos
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
- Current translation: Para pagamentos, compare destinatário, identidade do ativo, quantia entregue e qualquer destination tag/referência exigida com a intenção armazenada. Pagamentos parciais tornam a quantia pedida insegura como recibo: inspecione delivered_amount nos metadados. Registre uma transação uma vez, para um callback repetido não conceder um segundo direito. Evidência do ledger desconhecida ou indisponível continua pendente.
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
- Current translation: Aprenda pagamentos, destination tags, trustlines, negociações de token, NFTs, ofertas e execução.
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
- Current translation: O que uma destination tag faz?
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
- Current translation: 2. Qual ativo não precisa de trustline?
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
- Current translation: Uma página promocional pede que você adicione uma trust line ilimitada a um token com um ticker conhecido. Você só queria inspecionar o projeto. O que fazer em seguida?
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
- Current translation: Uma trust line registra uma relação entre contas para uma moeda. “Trust” aqui não significa que o emissor foi aprovado como seguro.
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
- Current translation: Uma trustline é uma relação no ledger entre duas contas para um código de moeda específico.
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
- Current translation: {s1} Uma trustline prova que um token é seguro.{br2}{s3} Ela só cria a relação de conta necessária para guardá-lo.
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
- Current translation: Uma trustline diz ao XRPL que sua conta aceita guardar um ativo emitido ligado a um emissor específico. Ela pode incluir um limite e outras configurações. $XRP não usa trustlines porque é nativo do ledger.
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
- Current translation: Ative a trustline e observe a relação se formar.
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
- Current translation: Criar trustline
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
- Current translation: Criar uma trustline é permissão para guardar um ativo. Não é um endosso, uma garantia de investimento nem uma revisão de segurança.
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
- Current translation: Código da moeda, emissor, suprimento, trustlines e controles.
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
- Current translation: Trustline ativa. Esta carteira agora pode guardar o ativo TOKEN deste emissor, sujeito ao limite e às configurações.
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
- Current translation: Criar trustline
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
- Current translation: Não existe trustline. Esta carteira não pode guardar o ativo TOKEN deste emissor.
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
- Current translation: Remover trustline
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
- Current translation: Você precisa de uma trust line para receber XRP nativo?
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
- Current translation: Uma trustline prova segurança?
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
- Current translation: Explique por que o XRP não precisa de trust line e por que um ticker, sozinho, não basta.
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
- Current translation: Primeiro confira a rede e a identidade exata do ativo. Suporte de exibição e existência no ledger são coisas diferentes. Não crie trust lines repetidas nem envie dinheiro para um logo aparecer.
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
- Current translation: Neste modelo, um detentor estabelece uma trust line e o emissor envia moeda emitida a esse detentor. Uma trust line, sozinha, não distribui tokens. Devolver um saldo ao emissor reduz a quantia em aberto. Um limite de trust não é um teto de suprimento do projeto inteiro, e uma promessa de suprimento num site não significa que esse limite seja imposto pelo ledger. Explique emissão, resgate e a autoridade que permanece antes de promover o ativo.
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
- Current translation: A autorização do emissor controla quem pode guardar uma moeda quando isso é exigido. O individual freeze restringe gastos por uma trust line; o deep freeze acrescenta restrições de recebimento, com exceções para operações diretamente com o emissor. O global freeze tem efeitos mais amplos. Esses controles de token não aplicam freeze ao XRP nativo. Clawback é uma capacidade separada e deve ser divulgada à parte; não é outro nome para freeze.
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
- Current translation: Entenda o XRP Ledger, carteiras, contas, emissores, trustlines, reservas, tokens, transações, o DEX, AMMs, NFTs e como tudo isso se liga.
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
- Current translation: Uma trust line registra uma relação entre contas para uma moeda. “Trust” aqui não significa que o emissor foi aprovado como seguro.
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
- Current translation: Trust lines | Central de Desenvolvedores | XRPL LAYMAN
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
- Current translation: Pagamentos, tags, trustlines, ofertas, AMMs, NFTs e como as transações do XRPL são executadas.
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
- Current translation: Não existe trustline.
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
- Current translation: Trustline não é necessária
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
- Current translation: Trustlines possuídas
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
- Current translation: Pagamento, trustline, oferta, oferta de NFT ou configuração de conta?
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
- Current translation: (same as the English) Trust lines:
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
- Current translation: Trustline geralmente necessária
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
- Current translation: Visualizador de trustline
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
- Current translation: TrustSet cria ou modifica uma relação de trust line. O LimitAmount dele identifica a moeda, o emissor contraparte e o limite. O XRP nativo não usa trust lines. Esta lição cobre tokens de trust line, não autorização de MPT.
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
- Current translation: O que uma trustline não significa
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
- Current translation: O que é uma trustline?
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
- Current translation: XRP é nativo; trust lines descrevem moedas emitidas.
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
- Current translation: Sua conta em geral precisa de uma trustline para o emissor e a moeda exatos.
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
- Current translation: 1 $XRP de reserva base
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
- Current translation: Uma venda normalmente usa uma oferta de NFT e a aceitação dela. Criar uma oferta não é pagamento nem entrega concluídos. Antes de aceitar, revise o NFT exato, o ativo do pagamento, a quantia, a restrição de destino, a expiração e a taxa de transferência do emissor. Taxas de transferência de NFT usam unidades de 0,001%; por exemplo, 1.000 representa 1%, não 1.000 XRP. A aplicabilidade depende da transferência. Confirme depois o resultado validado e a propriedade.
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
- Current translation: Taxa do AMM %
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
- Current translation: Uma conta fica ativa no ledger quando recebe $XRP suficiente para cobrir a reserva atual.
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
- Current translation: Um NFT nem sempre equivale a um item de reserva do dono. O XRPL guarda NFTs em objetos NFTokenPage, e cada página pode conter vários NFTs. Não conte NFTs individuais como objetos de reserva individuais.
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
- Current translation: Um NFT do XRPL é um token único no ledger, com o próprio identificador, flags, emissor, taxon, sequência e taxa de transferência opcional.
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
- Current translation: Regras atuais de reserva
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
- Current translation: 1 $XRP de reserva base + {objects} objetos possuídos × 0.2 $XRP.
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
- Current translation: 1 $XRP de reserva base + {objects} objeto possuído × 0.2 $XRP.
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
- Current translation: {s1} distinga saldo, limite, controles e reservas.
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
- Current translation: Estime a reserva de uma conta simples. A posse real e o comportamento da reserva podem variar conforme o tipo de objeto.
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
- Current translation: {s1} Todo $XRP exibido pode ser gasto.{br2}{s3} Parte pode ser exigida para a reserva da conta e a reserva do dono.
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
- Current translation: Taxa
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
- Current translation: Flags, URI, taxon, ofertas, taxas de transferência e ciclo de vida.
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
- Current translation: © 2026 House of Cauliman. Todos os direitos reservados.
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
- Current translation: Inspecione uma venda fictícia proposta: NFT Record N, preço 20 XRP, destinatário restrito Member C e uma expiração declarada. O campo de taxa de transferência do NFT, 1.000, representa 1%. Numa venda aplicável de 20 XRP, isso é 0.2 XRP; confira o modo real da venda e a contabilidade da liquidação, em vez de presumir que todo preço exibido é o líquido do vendedor.
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
- Current translation: A taxa está anormal?
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
- Current translation: Objetos do ledger podem afetar a reserva de XRP exigida por uma conta. Regras e valores de reserva podem mudar, e existem exceções de trust line: confira as regras atuais da rede em vez de presumir que toda linha custa o mesmo. Definir o limite como zero não apaga um saldo diferente de zero nem garante remoção imediata. Uma linha removível precisa cumprir as condições de estado padrão do ledger.
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
- Current translation: A Mainnet usa hoje {s1} mais {s2}. Esses valores podem mudar pela votação de taxas dos validadores, então o software deve consultar a rede em vez de deixá-los fixos no código para sempre.
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
- Current translation: Nosso clube de bairro fictício quer que os membros reservem vagas de oficina com créditos. Leve este mesmo projeto pelo curso. Rótulos como Issuer A são rótulos de papel, não endereços utilizáveis. O ponto é achar decisões que faltam antes de alguém criar um ativo.
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
- Current translation: Planeje reservas e remoção
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
- Current translation: Planeje a inspeção da reserva separada da quantidade de tokens. Obtenha as reservas base/incremental atuais da rede e os objetos de dono relevantes da conta quando for implementar uma ferramenta real. Não multiplique cada saldo visível de token por uma cobrança fixa de XRP: trust line e outros objetos têm exceções nas regras.
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
- Current translation: {s1} Leia saldo, limite, controles do emissor e efeitos na reserva sem confundir uma mudança de configuração com recebimento de dinheiro.
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
- Current translation: Calculadora de reserva
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
- Current translation: Reserva
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
- Current translation: Reservas
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
- Current translation: Separe a receita do produto das taxas de rede do XRPL.
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
- Current translation: Referências técnicas conferidas em 3 de outubro de 2026. Amendments da rede, suporte de carteira e regras de reserva podem mudar. Confira a documentação atual antes de implementar transações reais.
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
- Current translation: O clube agora propõe um NFT comemorativo opcional. Ele é separado dos créditos. Use este registro fictício: rede Testnet; identidade do NFT Record N; emissor Issuer A; dono Member B; transferível sim; burnable sim; mutável sim; campo de taxa de transferência 1.000; URI uma página HTTPS de metadados. Estes são campos descritivos, não JSON de transação.
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
- Current translation: {s1} A taxa da rede vai para os validadores.{br2}{s3} Os custos de transação do XRPL são destruídos.
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
- Current translation: O saldo total não é o mesmo que o XRP disponível acima da reserva e das necessidades de taxa. Confira o resultado exato e as regras atuais de reserva antes de mudar configurações sem relação.
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
- Current translation: Taxa de transferência
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
- Current translation: O tamanho da operação é {pct}% do lado selecionado do pool antes de uma taxa de {fee}%.
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
- Current translation: Usado para reservas e custos de transação
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
- Current translation: Por que parte do $XRP fica reservada
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
- Current translation: Escreva um contrato de lançamento de uma página: resultado para o usuário, escopo, identidades, controles, taxas e limitações.
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
- Current translation: Escreva uma promessa de resgate: um crédito reserva uma vaga elegível, sujeito aos termos escritos do agendamento. Decida cancelamentos, expiração, reembolsos, suporte e o que acontece se o clube fechar. O protocolo do token não escreve nem aplica esses termos de negócio por você.
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
- Current translation: Escreva o problema, o usuário pretendido e o menor resultado útil. Publique identidades exatas de ativo, papéis das contas, autoridade do emissor que permanece, taxas do produto e custos de rede. Separe um protótipo, um ensaio em rede de teste e um recurso funcionando na Mainnet. Evite prometer lucro, disponibilidade permanente ou uma garantia de segurança que você não consegue estabelecer.
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
- Current translation: XRP que precisa continuar disponível para sustentar uma conta e os objetos relevantes do ledger; é diferente de uma taxa de transação.
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
- Current translation: AMMs e slippage
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
- Current translation: Um AMM guarda dois ativos num pool e define o preço dos swaps a partir dos saldos do pool.
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
- Current translation: DEX, ofertas e AMMs
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
- Current translation: Preço, liquidez, slippage, controles do emissor, concentração, ciclos e o risco que as pessoas ignoram até doer.
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
- Current translation: Visual simples de slippage
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
- Current translation: Slippage e profundidade do pool
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
- Current translation: O DEX do XRPL usa ofertas para trocar um ativo por outro.
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
- Current translation: Um anúncio diz “colecionável permanente.” O NFT é mutável, a imagem fica num servidor web comum e o vendedor mostra uma captura de tela em vez do NFTokenID. Quais afirmações continuam sem prova?
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
- Current translation: Confira as permissões de burn, transferência e mutação de URI; anote a incerteza em vez de presumir os padrões.
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
- Current translation: Escolha um exemplo visível publicamente e localize o NFTokenID, o emissor, o dono e o taxon sem conectar uma carteira.
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
- Current translation: Escolha o modelo do ativo no papel: créditos intercambiáveis sugerem um token fungível; um colecionável de associação identificável à parte sugere um NFT. Registre token de trust line clássico para este exercício. MPTs são outro padrão, não um nome diferente para a mesma configuração.
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
- Current translation: Mint, burn e oferta
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
- Current translation: O mint cria o NFT; o burn destrói o token dele no ledger; uma oferta propõe uma troca e pode continuar sem ser aceita.
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
- Current translation: NFTokenMint define flags importantes. Transferable permite transferências entre detentores comuns; sem isso, transferências ligadas ao emissor têm restrições especiais. Burnable dá ao emissor ou à parte autorizada dele autoridade de burn; os donos podem fazer burn dos próprios NFTs. Um NFT mutável pode ter a URI atualizada pelo emissor ou pelo minter autorizado por meio de NFTokenModify. Não presuma que o ponteiro de metadados de todo NFT é fixo.
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
- Current translation: A autoridade de NFTokenModify é separada da propriedade comum.
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
- Current translation: NFTs passam por transações de mint, oferta, aceitação, transferência e burn.
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
- Current translation: A propriedade, sozinha, não é permissão de edição. Num NFT mutável, NFTokenModify fica limitado ao emissor ou ao minter autorizado; o amendment da rede e o suporte da carteira também importam.
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
- Current translation: Registre a rede, o NFTokenID, o emissor, o dono atual e o taxon. Um taxon agrupa NFTs relacionados de um emissor; não é prova de raridade nem promessa de que uma coleção está terminada. Propriedade e mint são papéis diferentes.
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
- Current translation: Separe uma restrição de saldo de clawback ou de burn de NFT. Peça o padrão exato do ativo e o controle que está sendo usado.
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
- Current translation: Configurações que podem controlar se o NFT é transferível e se o emissor pode fazer o burn dele.
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
- Current translation: O clube chama este colecionável de permanente, mas o exemplo permite explicitamente mudanças de URI e burn autorizado pelo emissor. Reescreva a afirmação assim: um colecionável transferível, com controles do emissor divulgados e conteúdo hospedado fora. Declare à parte o plano de preservação e a licença. Uma promessa mais clara é mais útil do que um selo de permanência.
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
- Current translation: A captura de tela não identifica o NFT. Obtenha a rede e o NFTokenID, inspecione emissor e dono e depois inspecione flags e URI. Metadados mutáveis e hospedagem externa exigem uma divulgação e um plano de preservação. A propriedade no ledger não transfere automaticamente direitos autorais nem prova que a imagem fica disponível para sempre.
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
- Current translation: Um membro vê dois ativos com o mesmo logo do clube. Um é do Issuer A e o outro do Issuer C. A decisão correta é comparar as identidades completas com a especificação do clube, não escolher a imagem mais bonita. Mesmo o ativo que corresponde ainda precisa da revisão separada de resgate e de autoridade.
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
- Current translation: Acrescente uma coluna de controle. Anote se a autorização do emissor é exigida e se foi concedida, se existem restrições de freeze e quais são as configurações de ripple relevantes. Desconhecido é um resultado válido: significa que você precisa de evidência, não de um padrão adivinhado.
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
- Current translation: Um emissor pode exigir autorização antes de um detentor guardar a moeda dele. Configurações de freeze podem restringir o ativo. Rippling pode mover valor por relações de trust line compatíveis como parte de pagamentos. Configurações de No Ripple afetam esses caminhos; elas não tornam um token seguro nem removem o risco do emissor. Revise as configurações da conta e da linha antes de mudar os padrões.
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
- Current translation: Status de blackhole
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
- Current translation: Traga as notas de identidade e de autoridade do projeto. Você não precisa de carteira para esta lição. Se mais tarde implementar uma integração, use um ambiente de teste separado e a documentação oficial atual do Xaman.
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
- Current translation: Um emissor pode aplicar freeze ao XRP nativo usando os controles de freeze do token?
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
- Current translation: A criação não cria compradores, um preço de mercado nem fundos de resgate. Inspecione a profundidade real do mercado e os termos de resgate publicados; nunca descreva um preço sem suporte como valor garantido.
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
- Current translation: Aplicar freeze a um token emitido significa que o emissor pode aplicar freeze ao XRP nativo do detentor?
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
- Current translation: Explique sua resposta sem olhar o exemplo resolvido e depois compare. Se você adivinhou, volte à seção correspondente. As caixas de marcação e o retorno do quiz ficam só nesta página; guarde você mesmo as notas do projeto.
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
- Current translation: Acompanhe um clube de bairro fictício, dos créditos de oficina a um colecionável e a um fluxo de agendamento. Cada lição tem definições, uma ficha guiada no papel, uma decisão resolvida, erros comuns e perguntas com explicação. Leia a lição, tente a ficha antes de conferir a resposta e guarde a página de notas. Não há conta, certificado de pontuação nem perfil de aprendizado salvo.
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
- Current translation: Controles de freeze
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
- Current translation: O freeze é descrito como destruir tokens
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
- Current translation: Tipos de freeze e No Freeze
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
- Current translation: (same as the English) Freeze versus clawback
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
- Current translation: Numa visão somente leitura de conta no explorer, abra a seção de saldos emitidos ou de trust line. Localize a moeda exata e o emissor na outra ponta da linha, depois compare saldo, limite e quaisquer campos de freeze/autorização/ripple exibidos. Identifique de qual perspectiva a tela parte. Se um campo não aparecer na interface, escreva não exibido em vez de presumir desativado. Sua ficha de aprendizado pode continuar fictícia se não houver um registro adequado.
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
- Current translation: O retorno interativo exige JavaScript. Todo o conteúdo da lição e a resposta resolvida acima continuam disponíveis.
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
- Current translation: Liste a evidência de que um revisor precisa: identidade exata do ativo; quem pode emitir ou mudar controles; registros de distribuição; termos de resgate; qualquer mecanismo de teto alegado; e o que continua desconhecido. Use a lição 4 para completar a seção de autoridade, em vez de presumir que a conta não pode mudar.
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
- Current translation: Liste os controles de token separados das chaves: autorização exigida, individual/deep/global freeze, No Freeze e capacidade de clawback. Explique o efeito sobre os detentores e a evidência que você inspecionou. Não converta uma restrição sobre uma relação de token em restrição sobre o XRP ou sobre todo ativo.
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
- Current translation: Fluxos do Xaman | Central de Desenvolvedores | XRPL LAYMAN
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
- Current translation: A página pública do NEB descreve um sistema futuro de negociação. A prévia dele não é evidência de dados ao vivo nem de execução.
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
- Current translation: Nunca mude flags de rippling, freeze ou autorização só para limpar um aviso que você não entende. Um TrustSet bem-sucedido é uma mudança de configuração, não uma compra nem um endosso de segurança.
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
- Current translation: Phishing e fluxos falsos de conexão
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
- Current translation: Resgate
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
- Current translation: Ensaie uma transação incerta: existe um hash, mas uma consulta não o encontra. Guarde a intenção original e a evidência de expiração limitada. Pergunte se o servidor consultado tem o histórico exigido e se já passou do limite relevante de ledger antes de concluir que não houve inclusão. Não emita um pagamento novo só porque uma consulta veio vazia.
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
- Current translation: Salve uma especificação de uma página do ativo, com propósito, padrão escolhido, rede, identidade, termos de resgate, cálculo de suprimento e perguntas abertas de autoridade. Na lição 2 você vai acrescentar um colecionável separado; não trate o crédito e o colecionável como o mesmo ativo.
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
- Current translation: Golpistas podem induzir você a autorizar a transação.
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
- Current translation: Pense no XRPL como o banco de dados compartilhado por baixo dos aplicativos. Xaman, corretoras, explorers, jogos e marketplaces são interfaces. O ledger é o registro que eles leem e no qual escrevem.
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
- Current translation: Esta lição segue o modelo clássico de token de trust line. O XRPL também tem Multi-Purpose Tokens (MPTs), com identificadores e capacidades diferentes. Escolha o padrão deliberadamente e confira a rede pretendida e o suporte da carteira antes de seguir um tutorial. Estas lições não criam nenhum dos dois tipos de token.
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
- Current translation: Freeze de saque
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
- Current translation: Escreva um plano de saída: resolva o saldo guardado por uma decisão deliberada de resgate ou de transferência e depois inspecione configurações fora do padrão da linha dos dois lados. Definir o limite como zero, sozinho, não prova que a linha sumiu. Ainda pode haver um saldo ou outro estado mantendo ela presente.
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
- Current translation: {s1} escreva o propósito, a identidade exata do ativo, a promessa de resgate e as perguntas de suprimento.
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
- Current translation: Limites de credencial do Xaman
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
- Current translation: Fluxos do Xaman
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
- Current translation: Fluxos do Xaman:
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
- Current translation: {s1}Fluxos do Xaman
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
- Current translation: Lista de verificação de implementação do Xaman
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
- Current translation: Conferências de implementação do Xaman
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
- Current translation: Conceitos de payload do Xaman
- Approve:
- Correction:
- Reviewer:
- Date:
