export default {
  search: {
    title: "ファイル検索",
    placeholder: "ファイル名を検索...",

    scope: {
      global: "グローバル検索",
      mount: "単一ストレージ検索",
      directory: "現在のディレクトリ及びサブディレクトリ検索"
    },

    results: {
      foundInMounts: "{mounts} 個のマウントポイントで {count} 個のファイルを見つけました",
      loadMore: "さらに読み込む",
      loadingMore: "結果を読み込み中...",
      noResults: "一致するファイルが見つかりませんでした",
      noResultsHint: "検索条件を調整するか異なるキーワードをお試しください",

      item: {
        copyPath: "パスをコピー"
      }
    },

    status: {
      idle: "検索キーワードを入力してください",
      searching: "検索中...",
      failed: "検索に失敗しました"
    },

    errors: {
      queryTooShort: "検索キーワードは少なくとも2文字必要です",
      searchFailed: "検索に失敗しました。しばらくしてから再試行してください",
      loadMoreFailed: "追加結果の読み込みに失敗しました"
    },

    history: {
      recent: "最近の検索",
      clear: "履歴をクリア"
    },

    tips: {
      keywordTips: "ファイル名の部分一致検索をサポートします"
    }
  }
}