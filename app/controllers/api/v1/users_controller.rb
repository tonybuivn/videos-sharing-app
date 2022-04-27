# frozen_string_literal: true

class Api::V1::UsersController < ApplicationController
  skip_before_action :authorized, only: :create

  def create
    @user = User.create(user_params)
    if @user.valid?
      token = encode_token({ user_id: @user.id })
      render json: { user: @user, jwt_token: token }
    else
      render json: { error: 'Invalid username or password' }
    end
  end

  private

  def user_params
    params.permit(:username, :password)
  end
end
