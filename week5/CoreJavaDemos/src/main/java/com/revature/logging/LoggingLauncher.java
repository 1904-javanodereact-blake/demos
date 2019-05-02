package com.revature.logging;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class LoggingLauncher {
	private static Logger log = LogManager.getRootLogger();

	public static void main(String[] args) {
		log.trace("This is a trace log, it is fine grained details");
		log.debug("This is a debug log, it is not quite as fine grained as trace but would be useful info to an IT person that maybe isnt a dev");
		log.info("This is an info log, it is general system information");
		log.warn("This is a warn log, something odd occurred but we recovered and UX shouldn't really be suffering");
		log.error("This is an error log, something bad happened and UX is likely suffering");
		log.fatal("This is a fatal log, you are about to be called at 4 am to fix it.");
	}
}
