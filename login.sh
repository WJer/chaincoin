#!/usr/bin/expect

spawn ssh gmj@118.31.32.197
expect "*password*" {send "gmj\r"}