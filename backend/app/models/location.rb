class Location < ApplicationRecord
  has_many :tree_locations
  has_many :trees, through: :tree_locations
end
