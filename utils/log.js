const chalk = require('chalk');

module.exports = (text, type) => {
  switch (type) {
		case "warn":
			process.stderr.write(chalk.hex("#ff5208")(`\r{ARIF-BABU}» ERROR « `) + text + '\n');
			break;
		case "error":
			process.stderr.write(chalk.bold.hex("#ff0000").bold(`\r{ARIF-BABU}» ERROR « `) + text + '\n');
			break;
		case "load":
      process.stderr.write(chalk.cyan(`\r{ARIF-BABU}» NEW USER « `) + text + '\n');
			break;
		default:
			process.stderr.write(chalk.cyan(`\r{ARIF-BABU}» ${type.toUpperCase()} « `) + text + '\n');
			break;
	}
};
module.exports.error = (text, type) => {
	process.stderr.write(chalk.bold.hex("#1539EA").bold(`\r{-HIROSHI-}» ${type} « `) + text + '\n');
};

module.exports.err = (text, type) => {
  process.stderr.write(chalk.bold.hex("#1539EA").bold(`\r{-HIROSHI-}» ${type} « `) + text) + '\n';
};

module.exports.warn = (text, type) => {
	process.stderr.write(chalk.bgYellow.hex("#1539EA").bold(`\r{-HIROSHI-}» ${type} « `) + text + '\n');
};

module.exports.master = (text, type) => {
  process.stderr.write(chalk.hex("#1539EA")(`\r{ARIF-BABU}» ${type} « `) + text + '\n');
};

module.exports.blue = (text, type) => {
  process.stderr.write(chalk.hex("#1539EA").bold(`\r{ARIF-BABU}» ${type} « `) + text + '\n');
};

module.exports.green = (text, type) => {
  process.stderr.write(chalk.green.bold(`\r{ARIF-BABU}» ${type} « `) + text + '\n');
};

module.exports.pink = (text, type) => {
  process.stderr.write(chalk.hex("#1539EA").bold(`\r{ARIF-BABU}» ${type} « `) + text + '\n');
};

module.exports.purple = (text, type) => {
  process.stderr.write(chalk.hex("#1539EA").bold(`\r{ARIF-BABU}» ${type} « `) + text + '\n');
};
module.exports.banner = (data) => {
	const rdcl = ['blue', 'yellow', 'green', 'red', 'magenta', 'yellowBright', 'blueBright', 'magentaBright']
	const color = chalk[rdcl[Math.floor(Math.random() * rdcl.length)]]
	console.log(color(data));
}
module.exports.loader = (data, option) => {
	switch (option) {
		case "warn":
			process.stderr.write(chalk.hex("#15EA38")(`\r» ARIF-BABU « `) + data + '\n');
			break;
		case "error":
			process.stderr.write(chalk.bold.hex("#15EA38").bold(`\r» HiroshiKim « `) + data + '\n');
			break;
		default:
			process.stderr.write(chalk.cyan(`\r» ARIF-BABU « `) + data + '\n');
			break;
	}
}
