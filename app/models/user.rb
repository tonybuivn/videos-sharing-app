# frozen_string_literal: true

class User < ApplicationRecord
  has_secure_password
  has_many :videos
  has_many :likes

  validates :username, presence: true, uniqueness: true
  validates :password, presence: true
end
