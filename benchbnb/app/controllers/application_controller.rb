class ApplicationController < ActionController::Base
  helper_method :current_user, :require_login, :logged_in?

  attr_reader :current_user

  def login(user)

  end

  def logout

  end

  def require_login

  end

  def logged_in?
    !!current_user
  end

  def current_user

  end

end
