FROM ubuntu

RUN apt-get update

RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -
RUN apgt-get upgrade -y
RUN apt-get install -y nodejs