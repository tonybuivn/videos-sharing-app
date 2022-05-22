# frozen_string_literal: true

class Api::V1::VideosController < ApplicationController
  skip_before_action :authorized, only: :index

  def index
    # TODO: pagination
    @videos = Video.all.limit(5)
    render json: @videos
  end
end
