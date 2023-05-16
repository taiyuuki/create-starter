import pkg from '../../package.json'
import logger from '../command/logger'

function parseArgs() {
    const arg2 = process.argv[2]
    if (arg2 === '-v' || arg2 === '--v' || arg2 === '--version' || arg2 === '-version') {
        console.log()
        logger.info(pkg.name + ' Version ' + pkg.version)
        process.exit(1)
    }
    if (arg2.startsWith('-')) {
        console.log()
        logger.error(arg2 + ' is not a valid parameter')
    }
}

export default parseArgs
