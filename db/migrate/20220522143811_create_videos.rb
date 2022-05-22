# frozen_string_literal: true

class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.string :title
      t.string :embed_id
      t.text :description
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
