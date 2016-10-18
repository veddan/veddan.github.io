var searchIndex = {};
searchIndex["concurrent_hashmap"] = {"doc":"","items":[[3,"ConcHashMap","concurrent_hashmap","A concurrent hashmap using sharding and reader-writer locking.",null,null],[3,"Entries","","",null,null],[3,"Options","","Options used when creating a hashmap.",null,null],[12,"capacity","","Number of mappings to preallocate space for.",0,null],[12,"hasher_factory","","Factory for the hasher used for hashing keys.",0,null],[12,"concurrency","","Expected level of concurrency.",0,null],[3,"Accessor","","A handle to a particular mapping.",null,null],[11,"new","","",1,{"inputs":[{"name":"rwlockreadguard"},{"name":"usize"}],"output":{"name":"accessor"}}],[11,"get","","",1,null],[11,"new","","Creates a new hashmap using default options",2,{"inputs":[],"output":{"name":"conchashmap"}}],[11,"with_options","","Creates a new hashmap with custom options",2,{"inputs":[{"name":"options"}],"output":{"name":"conchashmap"}}],[11,"find","","Searches for a key, returning an accessor to the mapped values (or `None` if no mapping\nexists).",2,null],[11,"find_mut","","Searches for a key, returning a mutable accessor to the mapped value\n(or `None` if no mapping exists).",2,null],[11,"insert","","Inserts a new mapping from `key` to `value`.\nIf a previous mapping existed for `key`, it is returned.",2,null],[11,"upsert","","Performs on &quot;upsert&quot; operation:\nUpdates the value currently mapped to `key` using `updater`,\nor maps `key` to `value` if no previous mapping existed.",2,null],[11,"remove","","Removes any mapping associated with `key`.",2,null],[11,"clone","","Clones the hashmap, returning a new map with the same mappings and hasher.",2,null],[11,"from_iter","","",2,{"inputs":[{"name":"t"}],"output":{"name":"self"}}],[11,"iter","","Iterates over all mappings.",2,null],[11,"clear","","Removes all mappings.",2,null],[11,"default","","Equivalent to `ConcHashMap::new()`.",2,{"inputs":[],"output":{"name":"conchashmap"}}],[11,"next","","",3,null],[11,"default","","",0,{"inputs":[],"output":{"name":"options"}}]],"paths":[[3,"Options"],[3,"Accessor"],[3,"ConcHashMap"],[3,"Entries"]]};
initSearch(searchIndex);
