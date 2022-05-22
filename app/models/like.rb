# frozen_string_literal: true

class Like < ApplicationRecord
  belongs_to :user
  belongs_to :video

  validates :value, presence: true, inclusion: { in: [1, 0, -1] }
end
