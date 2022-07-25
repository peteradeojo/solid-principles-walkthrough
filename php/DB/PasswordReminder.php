<?php

namespace DB;

class PasswordReminder
{
	private $dbConnection;
	
	/**
	 * Using the interface in the constructor ensures that PasswordReminder
	 * does not depend on concretely on the MySQLConnection class. But rather
	 * on an abstraction of it. This makes dependencies interchangeable
	 * as long as they implement the methods of the interface
	 */
	public function __construct(DBConnectionInterface $dbConnection)
	{
		$this->dbConnection = $dbConnection;
	}
}
