# Yadz Portifolio

Portfólio pessoal minimalista para desenvolvimento de software, servidores e games.

## Rodar localmente

Este projeto é estático e não exige Node.js.

Opção 1: abra `index.html` no navegador.

Opção 2: no terminal, dentro da pasta:

```powershell
python -m http.server 8080
```

Acesse `http://localhost:8080`.

## Personalização

Edite `index.html` para alterar:

- nome
- serviços
- email
- textos
- links

As imagens de games são referências externas para screenshots reais e materiais publicados na web; substitua-as por assets para os quais você tenha permissão de uso quando colocar o site em produção.

Imagens atualmente usadas:
- GTA V / Los Santos: screenshot real hospedada externamente.
- Minecraft: screenshot real.
- Hytale: imagem oficial da página de mídia do jogo.

## Direção visual

- preto, branco, cinza e destaque verde-amarelo discreto;
- hero cinematográfico;
- poucos elementos;
- sem seção Sobre mim;
- sem terminal, código ou ilustrações de computador;
- animações suaves e respeitando `prefers-reduced-motion`.


## Contatos

Edite apenas `config.js` para colocar seus contatos:

```js
window.YADZ_CONFIG = {
  discord: 'https://discord.com/users/SEU_ID_DISCORD',
  whatsapp: 'https://wa.me/55SEU_NUMERO',
  email: 'seu-email@exemplo.com'
};
```

Para o WhatsApp, use o número em formato internacional, sem `+`, espaços, parênteses ou hífens. Exemplo para Brasil: `55` + DDD + número.

Para o Discord, use o link do seu perfil. Uma forma segura de obter o identificador é ativar o Modo de Desenvolvedor no Discord e copiar seu ID de usuário.
