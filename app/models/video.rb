# frozen_string_literal: true

class Video < ApplicationRecord
  belongs_to :user
  has_many :likes
end
