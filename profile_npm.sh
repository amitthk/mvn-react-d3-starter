export JAVA_HOME=${HOME}/Apps/java/zulu8.42.0.23-ca-jdk8.0.232-macosx_x64
export PATH=$JAVA_HOME/bin:${HOME}/Apps/hadoop/hadoop-2.7.6/bin:${HOME}/Apps/spark/spark-2.3.4-bin-hadoop2.7/bin:${HOME}/Apps/sbt/bin:${HOME}/Apps/maven/bin:$PATH
APP_HOME=$(pwd)
export PATH=$PATH:${APP_HOME}/target/node:${APP_HOME}/target/node/node_modules/npm/bin