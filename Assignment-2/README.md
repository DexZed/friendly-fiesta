
# বোনাস সেকশন

উত্তরসমূহ:
- `পোস্টগ্রেস্কিউএল কী?` 
- `পোস্টগ্রেস্কিউএলে একটি ডেটাবেইস স্কিমার উদ্দেশ্য কী?`

## পোস্টগ্রেস্কিউএল কী?

#### পোস্টগ্রেসকিউএল , যা পোস্টগ্রেস নামেও পরিচিত, একটি বিনামূল্য এবং উন্মুক্ত উৎসের সাম্পর্কিক উপাত্তভান্ডার ব্যবস্থাপনা সিস্টেম (relational database management system) যার সম্প্রসারণক্ষমতা এবং এসকিউএল এর সাথে সামঞ্জস্যপূর্ণতা বিশেষ বৈশিষ্ট্য।

#### প্রতি লেনদেনের এককত্ব (Atomicity), ধারাবাহিকতা, বিচ্ছিন্নতা, স্থায়িত্বের (ACID) বৈশিষ্ট্য, স্বয়ংক্রিয় হালনাগাদসক্ষম উপাত্ত প্রদর্শন, বস্তুগত প্রদর্শন (Materialized view), ট্রিগার, বহিরাগত চাবি (Foreign key), সঞ্চিত কার্যপ্রণালী (Stored procedure) পোস্টগ্রেসকিউএল-এর মূল বৈশিষ্ট্য। এটি একযোগে বিপুল সংখ্যক ব্যবহারকারীর একক মেশিন হতে উপাত্তের গুদামঘরে (Data warehouse), কিংবা ওয়েব সার্ভিসে তৈরি বিপুল কর্মভার সামাল দেয়ার জন্য তৈরি। এটি ম্যাক ওএস-এর ডিফল্ট সার্ভার, এবং লিনাক্স, ফ্রিবিএসডি, ওপেন বিএসডি ও উইন্ডোজেও উপলভ্য।

### ইতিহাস
#### শুরুতে এর নাম ছিলো পোস্টগ্রেস (POSTGRES), যা ক্যালিফোর্নিয়া বিশ্ববিদ্যালয়, বার্কলি বিকশিত হওয়া ইনগ্রেস (Ingres) তথ্যভান্ডার ব্যবস্থাপনা সিস্টেমের উত্তরসুরি। ১৯৯৬ সালে এসকিউএল এর সাথে সামঞ্জস্যপূর্ণতা নজরে আনতে এটিকে পোস্টগ্রেসকিউএল নামকরণ করা হয়। ২০০৭ সালে বিকাশকারী দল পোস্টগ্রেসকিউএল মূল নাম এবং পোস্টগ্রেস বিকল্প নাম হিসাবে রাখার সিদ্ধান্ত নেয়।
----------------------------------------------------------------

## পোস্টগ্রেস্কিউএলে একটি ডেটাবেইস স্কিমার উদ্দেশ্য কী?

####  স্কিমা হলো নেমস্পেস ধারণার পোস্টগ্রেসে বাস্তবায়ন। ডাটাবেসে সংজ্ঞায়িত যেকোনো অবজেক্ট (টেবিল, ভিউ, ইনডেক্স, সিকোয়েন্স ইত্যাদি) ডাটাবেসের মধ্যে একটি স্কিমার মধ্যে সংজ্ঞায়িত করা হয়। ডিফল্টরূপে অবজেক্টগুলি স্কিমাতে তৈরি করা হয় public, তবে আপনি যত খুশি নামযুক্ত স্কিমা রাখতে পারেন এবং ডাটাবেস অবজেক্টগুলিকে সেই স্কিমাগুলিতে সংগঠিত করতে পারেন। 

#### আপনি একটি ডাটাবেসে স্কিমা যোগ করতে পারেন। নতুন স্কিমাটি কার্যকর হওয়ার জন্য আপনাকে এতে কিছু অবজেক্ট (যেমন টেবিল) তৈরি করতে হবে, অথবা কিছু অবজেক্ট এতে স্থানান্তর করতে হবে। উদাহরণস্বরূপ, আপনি alter table ... set schema ....একটি বিদ্যমান টেবিলকে অন্য একটি স্কিমায় স্থানান্তর করতে ব্যবহার করতে পারেন।

#### যদিও ডাটাবেসের মধ্যেই স্কিমা বিদ্যমান, বিপরীতভাবে নয়। বেশিরভাগ ক্ষেত্রেই নিরাপত্তা অনুমতিগুলি পৃথক বস্তুর জন্য বরাদ্দ করা হয়। যদিও একটি নির্দিষ্ট স্কিমার সমস্ত বস্তুর (যেমন টেবিল) জন্য একটি নির্দিষ্ট ভূমিকার জন্য একটি বিশেষাধিকার বরাদ্দ করা সম্ভব।

#### আরেকটি অতিরিক্ত তথ্য যা আপনার জানা উচিত তা হল অন্যান্য DBMS "schema" এবং "database" কে বিনিময়যোগ্যভাবে ব্যবহার করে (যেন postgres-এ শুধুমাত্র "public" schema ছিল)।

উদাহরণ :

```sql
-- Create Schema

CREATE SCHEMA brainrot_hellescape;

-- Create Table in That Schema

CREATE TABLE brainrot_hellescape.users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert Data

INSERT INTO brainrot_hellescape.users (username, email)
VALUES ('rizzlord', 'rizzlord@example.com');
-- Query the Table

SELECT * FROM brainrot_hellescape.users;
-- Set Schema in Search Path (optional)

SET search_path TO brainrot_hellescape;
```
