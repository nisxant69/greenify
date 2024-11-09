🌱 Greenify

Greenify is a simple yet powerful tool to help boost your GitHub contributions graph by automating commits over a specified date range. With Greenify, you can create random commits between any two dates to "greenify" your GitHub profile.

🚀 Features

📅 Generate random commit dates between two given dates.

🧑‍💻 Automate multiple commits with customizable commit counts.

📈 Boost your GitHub profile activity effortlessly.


📦 Installation

1. Clone this repository:

git clone https://github.com/your-username/greenify.git


2. Install dependencies:

npm install jsonfile moment simple-git random-int



⚙️ Usage

To use Greenify, call the createCommitsInRange function with:

start: The start date for commits (format: DD-MM-YYYY).

end: The end date for commits (format: DD-MM-YYYY).

commitCount: Number of commits to create.


const createCommitsInRange = require('./greenify.js');

createCommitsInRange('01-01-2023', '01-01-2024', 100);

This example creates 100 random commits between January 1, 2023, and January 1, 2024.

🛠️ How It Works

1. 🎲 It generates random dates within your specified range.


2. 📝 Each commit is added with a timestamp matching that random date.


3. 🔄 The function recursively commits until it reaches the specified commit count.



🚨 Important Notes

Use Responsibly: Generating too many commits can be seen as "spamming" and might lead to account restrictions.

Personal Use Only: Greenify is meant for fun and personal use.


🌍 Contributions

We welcome contributions! Feel free to submit a pull request or open an issue.


---

Happy Greenifying! 🌳

