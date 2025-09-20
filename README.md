# Split Soul

## Environment

- node -v === v22.17.0
- npm -v === 9.8.1

## Techstack

- React
- TypeScript
- Vite

## Documentation

Find detailed documentation in the `docs/` folder:

- [Project Overview](docs/overview.md)
- [Installation Guide](docs/installation.md)
- [Usage Instructions](docs/usage.md)
- [Contributing Guide](docs/contributing.md)
- [FAQ](docs/faq.md)

## Folder/File Structure

```
split-soul/
├── public/                          # Static assets
│   ├── manifest.json                # Chrome Extension Manifest
│   └── assets/                      # Extra static assets
│
├── src/
│   ├── App.tsx                      # Main React component
│   ├── main.tsx                     # Entry point
│   ├── utils/                       # Utility/helper functions
│   │   └── storage.ts
│   │
│   └── types/                       # Global TypeScript types
│       └── chrome.d.ts
│
├── docs/                            # Project documentation
│   ├── overview.md
│   ├── installation.md
│   ├── usage.md
│   ├── contributing.md
│   └── faq.md
│
├── tsconfig.json                    # TypeScript config
├── vite.config.ts                   # Vite config
├── package.json
└── README.md
```
