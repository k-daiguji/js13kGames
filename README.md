# js13kGames

---

## Setup

---

1. Install mise

   - Linux

     ```
     curl https://mise.run | sh
     ```

   - Windows
     ```
     winget install jdx.mise
     ```

1. Activate mise

   - Linux

     ```
     echo 'eval "$(~/.local/bin/mise activate bash)"' >> ~/.bashrc
     ```

   - Windows
     ```
     (&mise activate pwsh) | Out-String | Invoke-Expression
     ```

## Prompts

---

- Lint

  ```
  npm run lint
  ```

- Format

  ```
  npm run format
  ```

- Test

  ```
  npm test
  ```
