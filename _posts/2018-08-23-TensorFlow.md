---
title:  "记 第一次 用自己的训练集 在tensorflow上训练CNN的 坑（2）"
header:
  teaser: "/assets/images/tensorflow.jpg"
categories: 
  - learn
tags:
  - tensorflow
---

花了三天的时间，才成功在down下来的tensorflow代码上跑通了自己的CNN,心累

# 数据输入

这个问题几乎占据了一天半的时间。不得不说，tensorflow真的是超级超级烦，尤其是对于我们这些初学者，官方文档及其晦涩又没有例子，教程上还老拿MNIST和cifar_10这种做好的数据集说事，完全不知道图片该如何输入。

后来还是用TFRecords，先把图片加上标签制作成二进制文件，使用时再直接用reader读

下面是官方教程里的原话