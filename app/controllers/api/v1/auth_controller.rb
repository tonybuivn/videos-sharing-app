# frozen_string_literal: true

class Api::V1::AuthController < ApplicationController
  before_action :authorized, only: [:auto_login]

  def login
    @user = User.find_by(username: params[:username])

    if @user&.authenticate(params[:password])
      token = encode_token({ user_id: @user.id })
      render json: { user_info: @user, jwt_token: token }
    else
      render json: { error: 'Invalid username or password' }
    end
  end

  def auto_login
    render json: logged_in_user
  end
end
