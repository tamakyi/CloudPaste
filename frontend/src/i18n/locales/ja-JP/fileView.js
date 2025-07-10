export default {
  fileView: {
    title: "ファイルプレビュー",
    loading: "読み込み中...",
    error: "読み込み失敗",
    notFound: "ファイルが存在しません",

    // ファイル情報
    fileInfo: {
      filename: "ファイル名",
      fileSize: "サイズ",
      uploadTime: "アップロード日時",
      mimetype: "ファイルタイプ",
      fileLink: "ファイルリンク",
      needPassword: "パスワードでアクセスする必要があります",
      copyLink: "リンクをコピー",
      linkCopied: "リンクをクリップボードにコピーしました",
      copyFailed: "コピーに失敗しました",
      accessCount: "アクセス回数",
      expiresAt: "有効期限",
      accessMode: "アクセスモード",
      proxyAccess: "Workerプロキシアクセス",
      directAccess: "S3/CDN直リンクアクセス",
      limit: "制限"
    },

    // パスワード認証
    password: {
      title: "アクセスパスワードを入力してください",
      placeholder: "パスワードを入力",
      submit: "確認",
      error: "パスワードが間違っています。もう一度お試しください",
      loading: "認証中...",
      showPassword: "パスワードを表示",
      hidePassword: "パスワードを非表示"
    },

    // ファイル操作
    actions: {
      download: "ファイルをダウンロード",
      downloadFile: "ファイルをダウンロード",
      downloadFailed: "ダウンロードに失敗しました",
      downloadExpired: "ダウンロードリンクが期限切れの可能性があります。新しいリンクを取得してください",
      share: "リンクを共有",
      shareFileText: "ファイルを共有",
      edit: "情報を編集",
      delete: "ファイルを削除",
      preview: "プレビュー",
      previewFailed: "プレビューに失敗しました",
      getPreviewUrlFailed: "プレビューURLの取得に失敗しました",
      noUrlInResponse: "レスポンスデータにURLが含まれていません",
      shareSuccess: "共有に成功しました",
      shareFailed: "共有に失敗しました",
      deleteConfirm: "このファイルを削除しますか？この操作は取り消せません",
      deleteSuccess: "ファイルを削除しました",
      deleteFailed: "削除に失敗しました",
      deleting: "削除中...",
      noPermission: "権限が不足しています",
      redirecting: "数秒後に自動的にトップページに移動します",
      redirectMessage: "ファイルは正常に削除されました。トップページに移動します",
      retry: "再試行",
      refresh: "更新",
      manualCopy: "自動コピーできません。手動でコピーしてください"
    },

    // ファイルプレビュー
    preview: {
      loading: "プレビューを読み込み中...",
      error: "プレビューの読み込みに失敗しました",
      notSupported: "このファイルタイプはプレビューに対応していません",
      downloadToView: "ダウンロードして閲覧してください",

      // 通用プレビュー
      generic: {
        applicationFile: "アプリケーションファイル",
        fontFile: "フォントファイル",
        modelFile: "3Dモデルファイル",
        unsupportedType: "このファイルタイプはオンラインプレビューに対応していません",
        downloadAndExtract: "解凍ソフトで開くためにダウンロードしてください",
        downloadAndInstall: "インストール/実行するためにダウンロードしてください",
        downloadAndOpenWithDb: "データベースツールで開くためにダウンロードしてください",
        downloadAndInstallFont: "フォントをインストールするためにダウンロードしてください",
        downloadAndMount: "マウント/焼き付けるためにダウンロードしてください",
        downloadAndOpenWith: "対応アプリで開くためにダウンロードしてください",
        showDetails: "詳細を表示",
        hideDetails: "詳細を非表示",
        fileInfo: "ファイル情報",
        filename: "ファイル名",
        mimeType: "MIMEタイプ",
        fileExtension: "拡張子",
        suggestedApps: "推奨アプリケーション"
      },

      // テキストプレビュー
      text: {
        title: "テキストファイルプレビュー",
        loading: "テキストコンテンツを読み込み中...",
        error: "テキストコンテンツの読み込みに失敗しました",
        tooLarge: "ファイルサイズが大きいため、パフォーマンスを考慮してダウンロードしてご覧ください",
        truncated: "内容が切り捨てられています。全体を確認するにはダウンロードしてください"
      },

      // コードプレビュー
      code: {
        title: "コードプレビュー",
        loading: "コードコンテンツを読み込み中..."
      },

      // 設定ファイルプレビュー
      config: {
        title: "設定ファイルプレビュー",
        loading: "設定ファイルを読み込み中..."
      },

      // Markdownプレビュー
      markdown: {
        title: "Markdownプレビュー",
        loading: "Markdownコンテンツを読み込み中...",
        error: "Markdownプレビューの読み込みに失敗しました"
      },

      // HTMLプレビュー
      html: {
        title: "HTMLプレビュー",
        loading: "HTMLコンテンツを読み込み中...",
        loadingSource: "HTMLソースコードを読み込み中...",
        error: "HTMLの読み込みに失敗しました",
        viewSource: "ソースコードを表示",
        viewRendered: "レンダリングを表示",
        fullscreen: "全画面表示"
      },

      // PDFプレビュー
      pdf: {
        title: "PDFプレビュー",
        loading: "PDFを読み込み中...",
        error: "PDFの読み込みに失敗しました"
      },

      // 画像プレビュー
      image: {
        title: "画像プレビュー",
        loading: "画像を読み込み中...",
        error: "画像の読み込みに失敗しました"
      },

      // 動画プレビュー
      video: {
        title: "動画プレビュー",
        loading: "動画を読み込み中...",
        error: "動画の読み込みに失敗しました",
        notSupported: "お使いのブラウザはビデオタグに対応していません"
      },

      // オーディオプレビュー
      audio: {
        title: "オーディオプレビュー",
        loading: "オーディオを読み込み中...",
        error: "オーディオの読み込みに失敗しました",
        notSupported: "お使いのブラウザはオーディオタグに対応していません"
      },

      // Officeプレビュー
      office: {
        title: "Officeプレビュー",
        loading: "プレビューを読み込み中...",
        loadingDetail: "Officeプレビューを読み込み中です。少々お待ちください...",
        error: "Officeプレビューの読み込みに失敗しました",
        useMicrosoft: "Microsoftプレビューを使用",
        useGoogle: "Googleプレビューを使用",
        refreshPreview: "プレビューを更新",
        downloadFile: "ファイルをダウンロード",
        previewTrouble: "プレビューが正常に表示されない場合は以下をお試しください：",
        switchService: "またはプレビューサービスを切り替えて、",
        afterDownload: "ダウンロード後に確認してください",
        wordPreview: "Word文書プレビュー",
        excelPreview: "Excelシートプレビュー",
        powerpointPreview: "PowerPointプレゼンテーションプレビュー",
        passwordIssue: "パスワード認証の問題が発生している可能性があります。以下をお試しください：",
        refreshAndRetry: "ページを更新してパスワードを再入力",
        confirmPassword: "入力したパスワードが正しいことを確認",
        tryUrlPassword: "URLに直接パスワードパラメータを追加してみてください",
        googleService: "Google Docsサービスを使用",
        microsoftService: "Microsoft Officeサービスを使用",
        proxyMode: " (Workerプロキシモード)",
        directMode: " (直接アクセスモード)"
      }
    },

    // エラーメッセージ
    errors: {
      networkError: "ネットワークエラーが発生しました。ネットワーク接続を確認してください",
      serverError: "サーバーエラーが発生しました。しばらくしてから再試行してください",
      unauthorized: "認証されていません",
      forbidden: "アクセスが禁止されています",
      notFound: "ファイルが存在しません",
      unknown: "不明なエラーが発生しました",
      missingSlug: "ファイル識別子が欠落しています",
      loadFailed: "ファイル情報の読み込みに失敗しました",
      getDetailsFailed: "詳細の取得に失敗しました。現在表示されている情報を使用します",
      updateFailed: "更新に失敗しました"
    }
  }
}