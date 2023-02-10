source ../.env.local
psql $PG_CONNECTION_STRING -f create_table_user.psql >/dev/null
psql $PG_CONNECTION_STRING -f create_table_team.psql >/dev/null
psql $PG_CONNECTION_STRING -f create_table_stage.psql >/dev/null
psql $PG_CONNECTION_STRING -f create_table_match.psql >/dev/null
psql $PG_CONNECTION_STRING -f create_table_match_result.psql >/dev/null
psql $PG_CONNECTION_STRING -f create_table_prediction.psql >/dev/null
psql $PG_CONNECTION_STRING -f create_view_standings_A.psql >/dev/null
psql $PG_CONNECTION_STRING -f create_view_standings_B.psql >/dev/null
psql $PG_CONNECTION_STRING -f create_view_played_matches.psql >/dev/null
psql $PG_CONNECTION_STRING -f create_view_statement.psql >/dev/null