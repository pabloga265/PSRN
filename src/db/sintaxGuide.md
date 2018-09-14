The comparison operands can be property names or constants. 
At least one of the operands must be a property name. 
Special constants are false, true, and null.

Timestamps can be specified in the format “YYYY-MM-DD@HH:MM:SS:NANOSECONDS” where nanoseconds can be
omitted.

The comparison operators =/==, <=, <, >=, >, and !=/<> are supported for int, float, double, and
Date property types, e.g. age = 45.

The comparison operators =/== and !=/<> are supported for boolean (bool) properties.

For string and data (ArrayBuffer) properties, the = (and ==), != (and <>), BEGINSWITH, CONTAINS, and
ENDSWITH operators are supported, e.g. name CONTAINS 'Ja'.

Wildcard comparison is possible for strings with the LIKE operator,
e.g. name LIKE '*an?' to match “Jane”, “Dan”, “Shane”, etc.

Case-insensitive comparisons for strings using [c],
e.g. , CONTAINS[c] 'Ja'. Note that only characters “A-Z” and “a-z” will be ignored for case.

Realm supports the following compound operators: AND/&&, OR/ ||, and NOT/!,
e.g. name BEGINSWITH 'J' AND age >= 32.

The aggregate expressions @count/@size, @min, @max, @sum and @avg are supported on list properties,
e.g. employees.@count > 5 to find list of employees with more that 5 elements.

The aggregate expression @count/@size on strings and binary properties,
e.g. name.@size = 5 to find all with a name of 5 letters.

A key path can follow list properties relationships,
e.g. child.age >= 13 and cars.@avg.milage > 1000.

A key path can also follow linking objects (backlinks),
e.g. parents.age > 25 and parents.@count == 2.

The $ operator can be used to substitute arguments,
e.g. child.age >= $0 (see the example below).

Sorting and find distinct values are possible with functions SORT and DISTINCT,
e.g. age > 20 SORT(name ASC, age DESC) DISTINCT(name).

	The ordering for sorting can be one of the following case insensitive literals: 
	ASC, ASCENDING, DESC, DESCENDING.

	Any number of properties can appear inside the brackets in a comma separated list.

	Any number of sort/distinct conditions can be indicated, 
	they will be applied in the specified order.

	Sort or distinct cannot operate independently, these conditions must be attached to at least one
	query filter.