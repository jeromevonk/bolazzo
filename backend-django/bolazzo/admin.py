from django.contrib import admin
from .models import Match

class MatchAdmin(admin.ModelAdmin):
  list_display = ('home_team', 'away_team')

admin.site.register(Match, MatchAdmin)
