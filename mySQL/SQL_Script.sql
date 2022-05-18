-- 從users表查詢所有
-- select * from user  

-- 從users查詢username, password
-- select username,status from users 

-- 插入 在 users (username, password) 值 ('values', 'values') 
-- insert into users (username, password) values ('Lili Wong', 'iamlittlecute123') 

-- 更新 users 設定 password='new password' 在 id=value
-- update users set password='6666666' where id=3

-- 刪除 從 users 在 id=2
-- delete from users where id=2


-- 在 id大於3
-- select * from users where id>3

-- 和 或
-- select * from users where (id between 3 and 5) or (id > 3)


-- 排序 升序 降序
-- select * from users order by status asc
-- select * from users order by id desc
-- 多重排序
-- select * from users order by status asc, id desc

-- count(*) 算出 status=1 數量 
-- select count(*) from users where status=1

-- as 來改名
-- select username as mdfk,password as fbiopenup from users 


 

