FROM ruby:2.3.3
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs
RUN mkdir /stackoverflow
WORKDIR /stackoverflow
ADD Gemfile /stackoverflow/Gemfile
ADD Gemfile.lock /stackoverflow/Gemfile.lock
RUN bundle install
ADD . /stackoverflow
