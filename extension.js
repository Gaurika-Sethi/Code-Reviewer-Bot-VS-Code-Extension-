const vscode = require('vscode');
const fetch = require('node-fetch');

function activate(context) {
  let disposable = vscode.commands.registerCommand('extension.reviewWithDeepSeek', async function () {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      vscode.window.showWarningMessage('No editor is open!');
      return;
    }

    const code = editor.document.getText();
    const prompt = `You are a senior software engineer and code reviewer.
                    You will be given source code between triple backticks.
                    Give a short, clear, and beginner-friendly review.

                  Your response must follow this exact format:
                  ⭐ Summary: (1-2 lines about the overall quality)
                  🛠 Improvements: (3 bullet points with suggestions)
                  🐞 Possible Bugs: (List any found along with line numbers or write "No major bugs found")
                   Code:
                  \`\`\`
                  ${code}
                  \`\`\`
                  Please provide your review in short bullet points format.`;


    vscode.window.showInformationMessage('Reviewing code with DeepSeek (local)…');

    try {
      const response = await fetch("http://localhost:11434/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "deepseek-coder:instruct",
          prompt: prompt,
          stream: false
        })
      });

      const result = await response.json();

      const output = vscode.window.createOutputChannel("DeepSeek Review");
      output.show(true);

      // Debug: Show raw JSON in case something goes wrong
      output.appendLine("🛠️ Raw response:");
      output.appendLine(JSON.stringify(result, null, 2));

      const review = result.response;
      if (review) {
        output.appendLine("\n✨ DeepSeek's Code Review ✨\n");
        output.appendLine(review);
      } else {
        output.appendLine("⚠️ No review returned from DeepSeek.");
      }
    } catch (error) {
      vscode.window.showErrorMessage("Error contacting DeepSeek: " + error.message);
    }
  });

  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};
