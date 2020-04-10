class Tree < ApplicationRecord
  has_many :tree_locations
  has_many :locations, through: :tree_locations
end
