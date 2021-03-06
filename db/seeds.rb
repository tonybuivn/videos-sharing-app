# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

10.times do
  User.create(
    username: Faker::Internet.username,
    password: Faker::Internet.password
  )
end

User.all.each do |user|
  Video.create(
    title: Faker::Movie.title,
    embed_id: 'gguozxKlWO0',
    description: Faker::Quote.matz,
    user_id: user.id
  )
end

# 10.times do
#   Like.create(
#     user_id: Faker
#   )
# end
