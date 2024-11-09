<h1>🌱 Greenify</h1>

<p>Greenify is a simple yet powerful tool to help boost your GitHub contributions graph by automating commits over a specified date range. With Greenify, you can create random commits between any two dates to "greenify" your GitHub profile.</p>

<h2>🚀 Features</h2>

<ul>
  <li>📅 Generate random commit dates between two given dates.</li>
  <li>🧑‍💻 Automate multiple commits with customizable commit counts.</li>
  <li>📈 Boost your GitHub profile activity effortlessly.</li>
</ul>

<h2>📦 Installation</h2>

<ol>
  <li>Clone this repository:
    <pre><code>git clone https://github.com/your-username/greenify.git</code></pre>
  </li>
  <li>Install dependencies:
    <pre><code>npm install jsonfile moment simple-git random-int</code></pre>
  </li>
</ol>

<h2>⚙️ Usage</h2>

<p>To use Greenify, call the <code>createCommitsInRange</code> function with:</p>

<ul>
  <li><code>start</code>: The start date for commits (format: <code>DD-MM-YYYY</code>).</li>
  <li><code>end</code>: The end date for commits (format: <code>DD-MM-YYYY</code>).</li>
  <li><code>commitCount</code>: Number of commits to create.</li>
</ul>

<pre><code>const createCommitsInRange = require('./greenify.js');
createCommitsInRange('01-01-2023', '01-01-2024', 100);
</code></pre>

<p>This example creates 100 random commits between January 1, 2023, and January 1, 2024.</p>

<h2>🛠️ How It Works</h2>

<ol>
  <li>🎲 It generates random dates within your specified range.</li>
  <li>📝 Each commit is added with a timestamp matching that random date.</li>
  <li>🔄 The function recursively commits until it reaches the specified commit count.</li>
</ol>

<h2>🚨 Important Notes</h2>

<ul>
  <li><strong>Use Responsibly</strong>: Generating too many commits can be seen as "spamming" and might lead to account restrictions.</li>
  <li><strong>Personal Use Only</strong>: Greenify is meant for fun and personal use.</li>
</ul>

<h2>🌍 Contributions</h2>

<p>We welcome contributions! Feel free to submit a pull request or open an issue.</p>

<hr>

<h3>Happy Greenifying! 🌳</h3>
