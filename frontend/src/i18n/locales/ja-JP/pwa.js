export default {
  pwa: {
    // ステータスインジケーター
    status: {
      title: "PWAステータス詳細",
      offline: "オフラインモード",
      updateAvailable: "新しいバージョンあり",
      updating: "更新中",
      installable: "インストール可能",
      ready: "PWA準備完了"
    },

    // ステータスラベル
    labels: {
      networkStatus: "ネットワーク状態",
      installStatus: "インストール状態",
      serviceWorker: "Service Worker",
      updateStatus: "更新状態",
      notificationPermission: "通知許可",
      backgroundSync: "バックグラウンド同期",
      appVersion: "アプリバージョン"
    },

    // ネットワーク状態
    network: {
      online: "オンライン",
      offline: "オフライン"
    },

    // インストール状態
    install: {
      installed: "インストール済み",
      notInstalled: "未インストール",
      installable: "インストール可能",
      installing: "インストール中",
      installApp: "アプリをインストール",
      installPrompt: "狼のクリップボードをホーム画面に追加してより良い体験を！"
    },

    // Service Worker状態
    serviceWorker: {
      unknown: "不明",
      installing: "インストール中",
      waiting: "待機中",
      active: "アクティブ",
      redundant: "不要"
    },

    // 更新状態
    update: {
      latest: "最新バージョン",
      available: "更新あり",
      updating: "更新中",
      updateApp: "今すぐ更新",
      checkUpdate: "更新を確認",
      checking: "確認中",
      updatePrompt: "新しいバージョンが見つかりました。新機能を入手するには更新してください。",
      updateSuccess: "更新が完了しました",
      updateFailed: "更新に失敗しました"
    },

    // 通知許可
    notification: {
      default: "未設定",
      granted: "許可済み",
      denied: "拒否済み",
      enable: "通知を有効にする",
      requesting: "要求中",
      requestFailed: "通知許可の要求に失敗しました"
    },

    // バックグラウンド同期
    backgroundSync: {
      supported: "サポート済み",
      notSupported: "サポートされていません",
      syncing: "同期中",
      syncComplete: "同期完了",
      syncFailed: "同期に失敗しました。後でもう一度お試しください"
    },

    // オフラインメッセージ
    offline: {
      message: "オフライン状態です。一部の機能が制限される場合があります",
      restored: "ネットワークが復帰しました。データの同期を開始しています...",
      pageUnavailable: "{page}は現在利用できません。ネットワーク接続を確認してください"
    },

    // インストールプロンプト
    installPrompt: {
      title: "アプリのインストール",
      message: "狼のクリップボードをホーム画面に追加してより良い体験を！",
      install: "インストール",
      later: "後で",
      dismiss: "閉じる"
    },

    // アップデートプロンプト
    updatePrompt: {
      title: "新しいバージョンが利用可能です",
      message: "新しいバージョンが見つかりました。新機能を入手するには更新してください。",
      update: "更新",
      later: "後で",
      dismiss: "閉じる"
    },

    // 操作ボタン
    actions: {
      install: "インストール",
      update: "更新",
      checkUpdate: "更新を確認",
      enableNotification: "通知を有効にする",
      close: "閉じる",
      later: "後で",
      dismiss: "閉じる"
    },

    // エラーメッセージ
    errors: {
      installFailed: "インストールに失敗しました",
      updateFailed: "更新に失敗しました",
      notificationFailed: "通知許可の要求に失敗しました",
      syncFailed: "データ同期に失敗しました。後でもう一度お試しください",
      notSupported: "お使いのブラウザではこの機能はサポートされていません"
    },

    // 成功メッセージ
    success: {
      installed: "アプリが正常にインストールされました",
      updated: "アプリが最新バージョンに更新されました",
      notificationEnabled: "通知許可が有効になりました",
      syncComplete: "データ同期が完了しました"
    }
  }
};