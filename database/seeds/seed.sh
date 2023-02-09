source ../.env.local
psql $PG_CONNECTION_STRING -P pager=off -f populate_users.psql
psql $PG_CONNECTION_STRING -P pager=off -f populate_teams.psql
psql $PG_CONNECTION_STRING -P pager=off -f populate_stage.psql
psql $PG_CONNECTION_STRING -P pager=off -f populate_matches.psql
psql $PG_CONNECTION_STRING -P pager=off -f populate_match_results.psql
psql $PG_CONNECTION_STRING -P pager=off -f populate_predictions.psql