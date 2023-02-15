from django.db import models

# Create your models here.

class Match(models.Model):
  home_team = models.TextField()
  away_team = models.TextField()

  def _str_(self):
    return self.home_team + ' vs ' + self.away_team
  