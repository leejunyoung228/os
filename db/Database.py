import pymysql
import time

class Database:
    def __init__(self):
        self.db = pymysql.connect(host='localhost',user='mrchoidb',password='password',db='class01')
        self.cur = self.db.cursor()
    def selectAll(self):
        sql = "select * from photo1;"
        self.cur.execute(sql)
        result=self.cur.fetchall()
        print(result)
        return result
    def insert(self, image):
        val = ('{{"name":"{}"}}'.format(image))
        sql = "insert into photo1(image) values(%s);"
        self.cur.execute(sql,val)
        self.db.commit()
