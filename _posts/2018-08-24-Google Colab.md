---
title:  "Google Colab——用谷歌免费GPU跑你的深度学习代码（3）"
header:
  teaser: "/assets/images/colab.jpg"
categories: 
  - learn
tags:
  - python
---

# Google Colab简介
Google Colaboratory是谷歌开放的一款研究工具，主要用于机器学习的开发和研究。这款工具现在可以免费使用，但是不是永久免费暂时还不确定。Google Colab最大的好处是给广大的AI开发者提供了**免费的GPU**使用！GPU型号是**Tesla K80**！你可以在上面轻松地跑例如：Keras、Tensorflow、Pytorch等框架。

# 官方教程
新手指引：https://medium.com/deep-learning-turkey/google-colab-free-gpu-tutorial-e113627b9f5d

常见问题：https://research.google.com/colaboratory/faq.html

官方给出的新手指引当中已经给出了前期配置、常见软件和库的安装等方法。大家凭借官方教程可以基本入门Colab，但如果想更加自如地在Colab上跑通自己的代码，可能还需要更多的学习。

我写的这篇教程结合了官方给的资料和网上其他小伙伴的经验，希望对刚接触Colab的童鞋有所帮助: )（我自己使用Colab的时间其实不长，文中如果有错误的地方还望大家指正~）

# 基本操作
## 认识Google Colab
##### 依赖平台：Google Drive
Colab需要从Google Drive（谷歌云盘）进入。为了方便整理，我先在Google Drive中创建了一个新文件夹*"Colab"*。

![创建新文件夹"Colab"](https://upload-images.jianshu.io/upload_images/1939885-f867d0626837cc01.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

然后，我们在*"Colab"*文件夹中新建一个Colab项目，如图所示：

![新建Colab项目](https://upload-images.jianshu.io/upload_images/1939885-52516d158bebf23e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

> 注意：首次创建Colab项目需要点击“关联更多应用”，添加“Colaboratory”应用。

创建完项目之后我们就可以进入Colab的主界面了。

现在，我们就可以在代码框中输入一些代码。这里注意，如果我们直接输入代码，系统会当作是Python代码执行。例如我们输入：
```
a = 1
print(a)
```
运行之后输出框中会打印出"1"。

而如果我想执行系统命令，需要在命令前加感叹号`!`。例如我们输入：
```
！ls
```
执行后输出框中会显示当前目录下的所有文件夹。是不是很像Linux下的命令行操作哈哈！

其实我们在Colab中连接的云端的那台虚拟机正是使用的Ubuntu操作系统，我们可以将自己在Colab中的一切操作看作是在用命令行控制云端的那台Ubuntu虚拟机。你可以用它来直接跑代码，也可以使用一些系统命令（我们后面要安装第三方软件都需要借助一系列的系统命令）。看到这有没有感觉自己瞬间多了一台电脑~

## 前期配置
##### 1. 修改笔记本环境
我们每新建一个Colab项目，先对笔记本环境进行配置，选择是Python2还是Python3，是否使用GPU。（其中Python2是2.7版本，Python3是3.6版本）

![笔记本设置](https://upload-images.jianshu.io/upload_images/1939885-5c1f8a3e8e0fb91d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
修改完后点击保存。

##### 2. 安装必要的包和软件
在代码段中输入以下代码：
~~~
!apt-get install -y -qq software-properties-common python-software-properties module-init-tools
!add-apt-repository -y ppa:alessandro-strada/ppa 2>&1 > /dev/null
!apt-get update -qq 2>&1 > /dev/null
!apt-get -y install -qq google-drive-ocamlfuse fuse
from google.colab import auth
auth.authenticate_user()
from oauth2client.client import GoogleCredentials
creds = GoogleCredentials.get_application_default()
import getpass
!google-drive-ocamlfuse -headless -id={creds.client_id} -secret={creds.client_secret} < /dev/null 2>&1 | grep URL
vcode = getpass.getpass()
!echo {vcode} | google-drive-ocamlfuse -headless -id={creds.client_id} -secret={creds.client_secret}
~~~

运行代码，运行中会提示输入验证码，点击程序给出的网址进行验证即可。

##### 3. 挂载Google Drive
其实完成前面的操作我们就可以在Colab中敲写代码或者输入一些系统命令了，但是我们现在连接的虚拟机是和Google Drive脱离的，也就是说我们跑的程序无法使用谷歌云盘里的文件，这就非常受限制了。所以我们一般需要将**谷歌云盘看作是虚拟机中的一个硬盘挂载**，这样我们就可以使用虚拟机轻松访问谷歌云盘。
挂载Google Drive代码：
~~~
!mkdir -p drive
!google-drive-ocamlfuse drive
~~~
挂载完后在虚拟机中会多出一个文件夹*"drive"*，我们可以用`!ls`命令查看。

## 安装深度学习平台
在官方教程中已经有Keras、Tensorflow、Pytorch的安装方法，我平时使用Pytorch比较多，所以这里只给出Pytorch的安装代码。
```
!pip install http://download.pytorch.org/whl/cu80/torch-0.3.1-cp36-cp36m-linux_x86_64.whl torchvision
```
我这里安装的是0.3.1的版本，大家可以根据自己的需要调整版号。

安装完后输入`import pytorch`没有报错，基本上就是安装成功了。

>到此，我们介绍完了Colab中的基本操作，我们现在可以在Colab中跑一些简单的代码了。但这显然还不够，下面我将介绍一些进阶操作以及举例说明如何在Colab中跑自己写好的.py文件。

# 进阶操作
## 更改工作目录
在Colab中`cd`命令是无效的，切换工作目录使用`chdir`函数。
```
import os
os.chdir("drive")
```
执行以上代码，当前工作目录会进入到drive文件夹下。我们再使用`!ls`命令会发现系统输出的是drive文件夹下的目录。

回到上级目录：`os.chdir('../')`

## 安装Java8
有的第三方Python库可能需要依赖Java或是其他软件才能运行，有了前面的介绍，我们就可以在Colab中安装Java8了，其他复杂的软件安装也可以参考Java8的安装步骤进行安装。
##### 0. Colab前期配置（前面已经说了，这里不重复说啦）

##### 1.  添加ppa
```
!add-apt-repository ppa:webupd8team/java --yes
!apt-get update
```
**注意**：`--yes`这个小操作很关键，如果我们不在那句代码中加入后缀`--yes`，系统会给出这样的信息：

![](https://upload-images.jianshu.io/upload_images/1939885-8e1d2ca04e3c6fe1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

程序会卡在这个地方，让你输入回车继续安装或者Ctrl-C结束安装。但是Colab中**不支持用户在程序运行过程中与命令行进行交互**，我们没办法将回车键输给命令行，所以需要提前在代码中就告诉系统我们在后面的选择中选'yes'。

**这个小技巧在Colab中会被经常用到。**

##### 2. 安装oracle-java-installer
```
!echo oracle-java8-installer shared/accepted-oracle-license-v1-1 select true | /usr/bin/debconf-set-selections
!apt-get install oracle-java8-installer
```
和步骤一中同样的道理，第一句代码是为了提前告诉系统我们同意 oracle 的服务条款，否则安装程序会因为无法弹出协议窗口而自动停止。

到这里我们就正式地开始下载并安装Java了，Colab下载各种东西的速度都很快，不用担心网速的问题~

##### 3. 设置系统默认jdk
```
!update-java-alternatives -s java-8-oracle
```

##### 4. 测试Java是否安装成功
```
!java -version
!javac -version
```
系统正确输出Java版本即表示安装成功。

##### 5. 查看Java的安装路径
Java是安装完了，但是我们有时候还需要在代码中声明Java的安装路径才能调用Java。如何找到Java的安装路径呢？大家可以参考下面这篇文章：
https://www.cnblogs.com/oxspirt/p/6294754.html

例如我查找到的安装路径是：/usr/lib/jvm/java-8-oracle/jre/bin/java

## 运行自己的代码
好了，各种准备工作都做好了，我们如何在Colab上直接运行自己写好的代码呢？其实很简单，就跟在自己电脑上一样，使用命令`!python XXX.py`就可以了！详细步骤如下：
##### 1. 将.py文件和其它必要的文件上传到Google Drive
上传速度很快，不用担心网速问题~

##### 2. 将工作目录切换到.py文件所在目录
```
import os
os.chdir('drive/Colab/Your project folder')
```
不放心的话切换完之后用`!ls`命令看一下是不是到了指定目录下。

##### 3. 运行代码
`!python XXX.py`

##### 4. 注意事项
- Linux系统下文件路径使用'/'而不是'\\'

- 如果需要记得在代码里声明第三方软件或库的路径，例如我在使用Stanford Parser工具的时候，声明模型和Java的路径：
```
# 添加stanford环境变量  （content是系统根目录下的一个文件夹）
os.environ['STANFORD_PARSER'] = '/content/drive/Stanford_NLP/jars/stanford-parser.jar'
os.environ['STANFORD_MODELS'] = '/content/drive/Stanford_NLP/jars/stanford-parser-3.9.1-models.jar'
# 添加Java环境变量
os.environ['JAVAHOME'] = "/usr/lib/jvm/java-8-oracle/jre/bin/java"
```

# 总结
1. 可以把Colab看成是**一台带有GPU的Ubuntu虚拟机**，只不过我们只能用命令行的方式操作它。你可以选择执行系统命令，亦或是直接编写运行python代码。

2. 挂载完Google Drive，会在虚拟机里生成一个drive文件夹，直接将Google Drive当成是**一块硬盘**即可。访问drive文件夹里的文件，就是在访问你的Google Drive里的文件。

3. Colab最多连续使用12小时，超过时间系统会强制掐断正在运行的程序并收回占用的虚拟机。（好像再次连接到虚拟机后，虚拟机是被清空的状态，需要重新配置和安装库等等）

4. 请使用科学上网方式。

> 好了，Google Colab的使用方法就先介绍到这里了，笔者也是刚接触不久，发现国内介绍Colab的博文还是少了点，所以写下了这篇教程与大家分享。文中若有问题之处，还请大家多多包涵，可以在评论区指出我的错误，互相学习: )

# 参考资料
[官方教程](https://medium.com/deep-learning-turkey/google-colab-free-gpu-tutorial-e113627b9f5d)
[官方FAQ](https://research.google.com/colaboratory/faq.html)
https://www.cnblogs.com/smiler/p/6939913.html
https://www.cnblogs.com/oxspirt/p/6294754.html

> 本文链接：https://www.jianshu.com/p/000d2a9d36a0