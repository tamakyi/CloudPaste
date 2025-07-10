export default {
  fileBasket: {
    // 按钮文本
    button: {
      empty: "ファイルバスケット",
      withCount: "ファイルバスケット ({count})"
    },

    // 面板标题和标签
    panel: {
      title: "ファイルバスケット",
      summary: "{fileCount} 個のファイル、{directoryCount} 個のディレクトリから",
      totalSize: "合計サイズ：{size}MB",
      empty: "ファイルバスケットは空です",
      emptyDescription: "ファイルブラウザでファイルを選択してファイルバスケットに追加"
    },

    // 操作ボタン
    actions: {
      packDownload: "パックダウンロード",
      clear: "クリア",
      close: "閉じる",
      remove: "削除",
      addToBasket: "バスケットに追加",
      removeFromBasket: "バスケットから削除",
      batchAdd: "一括追加",
      // モバイル用短縮テキスト
      mobile: {
        batchAdd: "追加"
      }
    },

    // メッセージ通知
    messages: {
      addSuccess: "{count} 個のファイルをバスケットに追加しました。現在の合計は {total} 個です",
      addFailed: "ファイルバスケットへの追加に失敗しました",
      removeSuccess: "ファイルをバスケットから削除しました",
      removeFailed: "ファイルバスケットからの削除に失敗しました",
      toggleFailed: "ファイルバスケットの状態切替に失敗しました",
      batchAddSuccess: "{count} 個のファイルを一括追加しました。現在の合計は {total} 個です",
      batchAddFailed: "ファイルの一括追加に失敗しました",
      clearSuccess: "ファイルバスケットをクリアしました",
      clearFailed: "ファイルバスケットのクリアに失敗しました",
      noFilesToAdd: "追加可能なファイルがありません（フォルダは無視されます）",
      emptyBasket: "ファイルバスケットが空です。まずファイルを追加してください",
      taskCreated: "タスクを作成しました：{taskName}",
      taskCreateFailed: "パック作成タスクに失敗しました",
      cancelled: "操作がキャンセルされました"
    },

    // 警告メッセージ
    warnings: {
      large: "選択したファイルの合計サイズは約 {size}MBです。パック作成に時間がかかる場合があります",
      veryLarge: "選択したファイルの合計サイズは約 {size}MBです。パック作成に時間がかかりメモリを多く消費します"
    },

    // 確認ダイアログ
    confirmations: {
      continueAnyway: "続行しますか？",
      clearBasket: "ファイルバスケットをクリアしますか？すべての収集済みファイルが削除されます"
    },

    // タスク関連
    task: {
      name: "{count} 個のファイルをパックダウンロード（{directories} 個のディレクトリから）",
      preparing: "ダウンロード準備中...",
      downloading: "ファイルをダウンロード中...",
      generating: "圧縮パックを生成中...",
      completed: "パックダウンロード完了",
      failed: "パックダウンロード失敗",
      summarySuccess: "成功：{success} 個 / 失敗：{failed} 個",
      summaryWithFailures: "成功: {success} / 失敗: {failed}",
      failedFilesHeader: "以下のファイルのダウンロードに失敗しました："
    },

    // エラーメッセージ
    errors: {
      noDownloadUrl: "ファイルのダウンロードリンクを取得できませんでした",
      downloadFailed: "ファイルダウンロード失敗",
      zipGenerationFailed: "圧縮パック生成失敗"
    },

    // ファイル情報
    fileInfo: {
      fileName: "ファイル名",
      fileSize: "サイズ",
      sourceDirectory: "元のディレクトリ",
      addedTime: "追加時間"
    },

    // ステータステキスト
    status: {
      inBasket: "バスケットにあります",
      notInBasket: "バスケットにありません",
      processing: "処理中...",
      completed: "完了",
      failed: "失敗"
    }
  }
}