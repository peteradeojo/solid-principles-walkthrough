<?php

namespace DB;

class MySQLConnection implements DBConnectionInterface
{
	public function connect()
	{
		return 'Database Connection';
	}
}
