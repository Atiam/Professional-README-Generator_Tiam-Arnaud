// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'None'){
    return ''
  }
  else {
    return `![GitHub license](https://img.shields.io/badge/license-${license.replace(/ /g, '%20')}-blue.svg)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'None'){
    return ''
  }
  else {
    return '- [License](#license)'
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'None'){
    return ''
  }else {
    return `## License

    The application is cover under ${license} license.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({title, description, installation, usage, license, contributing, tests, questions, email}) {
  return `# ${title} ${renderLicenseBadge(license)}

  ## Description

  ${description}

  ## table Of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#Questions)
- [video](#Video)

${renderLicenseLink(license)}

  ## Installation

  ${installation}

  ## Usage

  ${usage}

 ${renderLicenseSection(license)}

  ## Contributing

  ${contributing}

  ## Tests

  ${tests}

  ## Questions
  For any correction, please find the source code on ${questions} Github.
  For any questions, please reach out to me on ${email} email.
  
  ## Video
  [![Watch the video](https://github.com/Atiam/Professional-README-Generator_Tiam-Arnaud/blob/main/assets/Screenshot%202024-05-03%20180136.png)](https://app.screencastify.com/v2/manage/videos/7gVGZhlorMPLgW0fT7Kj)
  `;



}

module.exports = generateMarkdown;
