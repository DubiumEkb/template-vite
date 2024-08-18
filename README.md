# FSD - Feature-Sliced Design

```text
.
└── src/
    ├── app/
    │   ├── protected/
    │   │   ├── authRoute.tsx
    │   │   ├── privateRoute.tsx
    │   │   └── index.ts
    │   ├── app.tsx
    │   ├── routes.ts
    │   └── index.ts
    └── assets/
        ├── css/
        │   ├── global.scss
        │   └── _params.scss
        ├── entities/
        │   └── posts/
        │       ├── api/
        │       │   └── api.ts
        │       ├── model/
        │       │   ├── get.posts.ts
        │       │   ├── update.post.ts
        │       │   └── delete.post.ts
        │       ├── types/
        │       │   └── post.types.ts
        │       └── ui/
        │           ├── view/
        │           │   ├── view.tsx
        │           │   └── view.module.scss
        │           ├── like/
        │           │   ├── like.tsx
        │           │   └── like.module.scss
        │           ├── img/
        │           │   ├── img.tsx
        │           │   └── img.module.scss
        │           └── index.ts
        ├── features/
        │   └── posts/
        │       └── ui/
        │           └── card/
        │               ├── card.tsx
        │               └── card.module.scss
        ├── pages/
        │   └── posts/
        │       ├── index.tsц
        │       ├── posts.tsx
        │       └── posts.module.scss
        ├── shared/
        │   ├── ui/
        │   │   └── button/
        │   │       ├── button.tsx
        │   │       └── button.module.scss
        │   └── index.ts
        ├── widgets/
        │   ├── header/
        │   │   ├── header.tsx
        │   │   ├── header.module.scss
        │   │   └── index.ts
        │   └── footer/
        │       ├── footer.tsx
        │       ├── footer.module.scss
        │       └── index.ts
        └── main.tsx
```

## Объяснение модулей

### Entities

Entites - Предназначена для хранения api, model, types и ui.

```text
src/
└── entities/
    └── <entity-name>/
        ├── api/
        │   └── *.ts
        ├── model/
        │   └── *.model.ts
        ├── types/
        │   └── *.types.ts
        ├── ui/
        │   ├── <component>/
        │   │   ├── *.tsx
        │   │   ├── *.module.scss
        │   │   └── index.ts
        │   └── index.ts
        └── index.ts
```

### Features

Features - Собирательные модули/виджеты с логикой

```text
src/
└── features/
    └── <entity-name>/
        └── ui/
            ├── <components>/
            │   ├── *.tsx
            │   ├── *.module.scss
            │   └── index.ts
            └── index.ts
```

### Pages

Pages - Хранятся компоненты страниц

```text
.
└── pages/
    └── <page>/
        ├── index.ts
        ├── <page>.tsx
        └── <page>.module.scss
```

### Shared

Shared - Предназначена для хранения общих утилит, хук, вспомогательных функций и UI-компонентов, которые могут использоваться в разных частях приложения.

```text
.
└── shared/
    ├── config/
    │   └── axios.ts
    ├── hooks/
    │   ├── <useHook>/
    │   │   ├── *.ts
    │   │   └── index.ts
    │   └── index.ts
    ├── helpers/
    │   ├── <helper>/
    │   │   ├── *.ts
    │   │   └── index.ts
    │   └── index.ts
    └── ui/
        ├── <components>/
        │   ├── *.tsx
        │   ├── *.module.scss
        │   └── index.ts
        └── index.ts
```
