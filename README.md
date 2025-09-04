
# Code Reviewer Bot (VS Code Extension)

![MIT License](https://img.shields.io/badge/license-MIT-green)  
![Built with Ollama](https://img.shields.io/badge/AI-Ollama-black)  
![Status](https://img.shields.io/badge/status-Under%20Development-yellow)


A local AI-powered code reviewer for Visual Studio Code, powered by Ollama
and the DeepSeek Coder model.  
No API keys, no cloud dependency — just fast, private, offline code reviews.

## Features

- One-click code review inside VS Code
- Powered by DeepSeek Coder (via Ollama)
- Works completely offline once the model is installed
- Beginner-friendly output format:
  - Summary
  - Improvements
  - Possible Bugs
## Built With

- [![Visual Studio Code](https://img.shields.io/badge/VS%20Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white)](https://code.visualstudio.com/)  
- [![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)  
- [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)  
- [![Ollama](https://img.shields.io/badge/Ollama-000000?style=for-the-badge&logo=ollama&logoColor=white)](https://ollama.ai)  
- [![DeepSeek](https://img.shields.io/badge/DeepSeek%20Coder-AI-blue?style=for-the-badge)](https://huggingface.co/deepseek-ai)  

---

## Installation

Follow these steps to set up the extension locally:

1. **Clone the repository**
   ```bash
   git clone https://github.com/Gaurika-Sethi/Code-Reviewer-Bot-VS-Code-Extension-.git
   cd Code-Reviewer-Bot-VS-Code-Extension-
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Verify Ollama installation**
   ```bash
   ollama --version
   ```

4. **Pull the DeepSeek model**
   ```bash
   ollama pull deepseek-coder:instruct
   ```

5. **Run the extension**  
   Open the project in VS Code and press F5 launches the Extension Development Host.  

   Open Command Palette (Ctrl+Shift+P or Cmd+Shift+P).  
   Run “Review Code with DeepSeek”.  

   View the review results in the Output Panel → DeepSeek Review.

   Example output:  
   ```
   DeepSeek's Code Review  

   Summary: The function works but can be improved for readability.  

   Improvements:  
   - Add input validation.  
   - Use consistent naming.  
   - Add JSDoc comments.

   Possible Bugs:  
   - No bugs found.  
   ```

## Requirements

- Visual Studio Code
- Node.js (v16+)
- Ollama installed locally
- DeepSeek model pulled with:
  ```bash
  ollama pull deepseek-coder:instruct
  ```

## Tech Stack & Learnings

- VS Code Extension API
- Node.js & JavaScript
- Ollama local LLMs (DeepSeek Coder)
- Prompt Engineering for structured, clear outputs

## Future Ideas

- Auto-review on file save
- Support for multiple models (like Llama 3, Mistral)
- Highlighting issues directly in the editor

## Project Status

🚧 Currently under development — more features coming soon.  
Planned: multi-model support and inline issue highlighting.

## Known Issues

- Occasional vague responses from model  
- Requires manual refresh if Ollama service is restarted  

## FAQ

**Q: Do I need internet for reviews?**  
A: Only for the first time when pulling the DeepSeek model. After that, it works offline.

**Q: Can I use another model?**  
A: Yes, by changing the model name in the extension code and pulling it with Ollama.

**Q: Does it support Python/Java/C++ code review?**  
A: Yes, any text-based code can be reviewed, but results are best for JavaScript/Python at the moment.

## Contact

- LinkedIn: [Gaurika Sethi](https://www.linkedin.com/in/gaurika-sethi-53043b321)  
- Medium: [@pixelsnsyntax](https://medium.com/@pixelsnsyntax)  
- Twitter: [@pixelsnsyntax](https://twitter.com/pixelsnsyntax)  

Project Link: [Code Reviewer Bot VS Code Extension](https://github.com/Gaurika-Sethi/Code-Reviewer-Bot-VS-Code-Extension-)

## License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.  
See [CHANGELOG.md](CHANGELOG.md) for version history.


