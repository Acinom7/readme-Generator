// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ![${data.license}](https://img.shields.io/badge/license-${data.license}-blue)

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
To install necessary dependencies, run the following command:
${data.installation}

## Usage
${data.usage}

## License
This project is licensed under the ${data.license} license.

## Contributing
${data.contributing}

## Tests

To run tests, run the follwing command: ${data.tests}

## Questions
If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [@${data.username}](https://www.github.com/${data.username})
`;
}

module.exports = generateMarkdown;
