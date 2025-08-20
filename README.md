# Code Reviewer Bot (VS Code Extension)

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

 - Installation

## Installation

Follow these steps to set up the extension locally:

1. **Clone the repository**
   ```bash
   git clone https://github.com/Gaurika-Sethi/Code-Reviewer-Bot-VS-Code-Extension-
   
2. **Install dependencies**
    ```bash
    npm install

3. **Install dependencies**
    ```bash
    ollama --version

4. **Pull the DeepSeek model**
    ```bash
    ollama pull deepseek-coder:instruct

5.**Run the extension**  
Open the project in VS Code and press:  

Open Command Palette (Ctrl+Shift+P or Cmd+Shift+P).  
Run “Review Code with DeepSeek”.

View the review results in the Output Panel → DeepSeek Review.

    DeepSeek's Code Review  
    
    Summary: The function works but can be improved for readability.  
    
    Improvements:  
    - Add input validation.  
    - Use consistent naming.  
    - Add JSDoc comments.
    
    Possible Bugs:
    - No bugs found.

## Requirements

- Visual Studio Code

- Node.js (v16+)

- Ollama installed locally

- DeepSeek model pulled with:
  ```bash
  ollama pull deepseek-coder:instruct

## Learnings & Tech

- VS Code Extension API

- Node.js & JavaScript

- Ollama local LLMs (DeepSeek Coder)

- Prompt Engineering for structured, clear outputs

## Future Ideas

- Auto-review on file save

- Support for multiple models (like Llama 3, Mistral)

- Highlighting issues directly in the editor

## About Me

Hi, I'm Gaurika — a developer who loves building tools that blend AI and productivity.  
This project started as a way to learn the VS Code Extension API, explore local models 
with Ollama, and practice prompt engineering.  

I enjoy working on projects that make developer life easier, while also helping me 
grow my skills in JavaScript, AI, and design.
